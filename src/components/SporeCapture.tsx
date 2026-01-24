import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sporeStore } from '../lib/spore-store';
import MycelialGraph from './MycelialGraph';

export default function SporeCapture({ onBack }: { onBack: () => void }) {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [capturedBlob, setCapturedBlob] = useState<Blob | null>(null);
    const [step, setStep] = useState<'IDLE' | 'RECORDING' | 'TAGGING' | 'SAVED'>('IDLE');
    const [captureType, setCaptureType] = useState<'voice' | 'text' | 'file'>('voice');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const recognitionRef = useRef<any>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<BlobPart[]>([]);

    // Initialize Speech Recognition (Web Speech API)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = true;
                recognitionRef.current.interimResults = true;

                recognitionRef.current.onresult = (event: any) => {
                    let interimTranscript = '';
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            setTranscript(prev => prev + event.results[i][0].transcript + ' ');
                        } else {
                            interimTranscript += event.results[i][0].transcript;
                        }
                    }
                };

                recognitionRef.current.onerror = (event: any) => {
                    console.error('Speech recognition error', event.error);
                };
            }
        }
    }, []);

    const startDrift = () => {
        setIsRecording(true);
        setStep('RECORDING');
        setTranscript('');
        chunksRef.current = [];

        // Start Audio Recording (for blob)
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (e) => chunksRef.current.push(e.data);
            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                setCapturedBlob(blob);
            };
            mediaRecorderRef.current.start();
        }).catch(e => console.error("Mic Access Denied", e));

        // Start Transcription
        if (recognitionRef.current) {
            try {
                recognitionRef.current.start();
            } catch (e) {
                // Already started
            }
        }
    };

    const stopDrift = () => {
        setIsRecording(false);
        setStep('TAGGING');

        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };

    const saveSpore = async (tag: string) => {
        // Save to IndexedDB (The Sovereign Layer)
        const platform = captureType === 'voice' ? 'voice-capture' :
            captureType === 'file' ? 'file-upload' : 'text-fragment';

        await sporeStore.capture(
            transcript.trim(),
            captureType,
            [tag],
            capturedBlob || undefined,
            platform
        );
        setStep('SAVED');
        setTimeout(() => {
            setStep('IDLE');
            setTranscript('');
        }, 2000);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setTranscript(file.name);
            setCaptureType('file');
            setCapturedBlob(file); // Reuse blob field for files
            setStep('TAGGING');
        }
    };

    const [editingId, setEditingId] = useState<string | null>(null);
    const [visualizeId, setVisualizeId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState('');

    const startEditing = (spore: any) => {
        setEditingId(spore.id);
        setEditContent(spore.content);
        setVisualizeId(null); // Close graph if editing
    };

    const toggleGraph = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setVisualizeId(prev => prev === id ? null : id);
        setEditingId(null);
    };

    const saveEdit = async (id: string) => {
        await sporeStore.updateContent(id, editContent);
        setEditingId(null);
        loadHistory(); // Refresh list
    };

    const [history, setHistory] = useState<any[]>([]);
    const [showHistory, setShowHistory] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // User preference

    useEffect(() => {
        if (showHistory) {
            loadHistory();
        }
    }, [showHistory]);

    // Handle Share Target (Incoming Text)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sharedText = params.get('text');
        const sharedTitle = params.get('title');
        const sharedUrl = params.get('url');

        if (sharedText || sharedTitle || sharedUrl) {
            const combined = [sharedTitle, sharedText, sharedUrl].filter(Boolean).join('\n');
            if (combined) {
                setTranscript(prev => prev ? prev + '\n' + combined : combined);
                setStep('TAGGING'); // Skip recording, go straight to tagging
            }
        }
    }, []);

    const loadHistory = async () => {
        const spores = await sporeStore.getAll();
        setHistory(spores);
    };

    return (
        <div className={`relative min-h-[80vh] flex flex-col items-center justify-center p-6 overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-800'}`}>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className={`absolute top-4 right-4 z-50 p-2 rounded-full transition-all ${darkMode ? 'bg-slate-800 text-amber-300' : 'bg-slate-100 text-slate-400'}`}
            >
                {darkMode ? '🌙' : '☀️'}
            </button>

            {/* BACKGROUND: SPORE DRIFT */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div key="blob1" className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div key="blob2" className="absolute top-1/3 right-1/4 w-32 h-32 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div key="blob3" className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <AnimatePresence mode="wait">

                {/* IDLE & RECORDING STATE */}
                {!showHistory && (step === 'IDLE' || step === 'RECORDING') && (
                    <motion.div
                        key="recorder"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="z-10 flex flex-col items-center gap-8"
                    >
                        <div className="relative">
                            {/* The Pulsing Core (Slower 60BPM-ish breath rhythm) */}
                            <AnimatePresence>
                                {isRecording && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1 }}
                                        animate={{ opacity: 0.4, scale: 2.5 }}
                                        exit={{ opacity: 0, scale: 1 }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} // 4s = 15 breaths/min (calm)
                                        className="absolute inset-0 bg-teal-400 rounded-full z-0"
                                    />
                                )}
                            </AnimatePresence>

                            <button
                                onMouseDown={startDrift}
                                onTouchStart={startDrift}
                                onMouseUp={stopDrift}
                                onTouchEnd={stopDrift}
                                className={`relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${isRecording ? 'bg-red-500 scale-95 shadow-red-500/50' : 'bg-teal-600 hover:bg-teal-500 shadow-teal-500/40'}`}
                            >
                                <svg className={`w-12 h-12 text-white transition-transform ${isRecording ? 'scale-110' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                            <p className="mt-8 text-center text-slate-400 font-medium tracking-widest text-sm uppercase">
                                {isRecording ? "Listening..." : "Hold to Capture"}
                            </p>
                        </div>

                        {/* Live Transcript Preview */}
                        {transcript && (
                            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl max-w-sm text-center shadow-lg border border-slate-100">
                                <p className="text-slate-600 text-sm font-medium">{transcript}</p>
                            </div>
                        )}

                        <div className="flex gap-4 items-center">
                            <button
                                onClick={() => setShowHistory(true)}
                                className="px-6 py-2 bg-white/50 hover:bg-white rounded-full text-slate-500 text-sm font-bold border border-white shadow-sm transition-all"
                            >
                                Queue
                            </button>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-all border border-indigo-100 shadow-sm group"
                                title="Ingest File"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* TAGGING STATE */}
                {!showHistory && step === 'TAGGING' && (
                    <motion.div
                        key="tagging"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="z-10 w-full max-w-md"
                    >
                        <h3 className="text-center text-2xl font-black text-slate-800 mb-2">Mycelial Routing</h3>
                        <p className="text-center text-slate-500 mb-8 text-sm">Where does this spore belong?</p>

                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => saveSpore('#Projects')} className="p-6 bg-rose-50 border border-rose-100 rounded-2xl hover:bg-rose-100 transition-colors flex flex-col items-center gap-2 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">🚜</span>
                                <span className="font-bold text-rose-800">Projects</span>
                            </button>
                            <button onClick={() => saveSpore('#People')} className="p-6 bg-teal-50 border border-teal-100 rounded-2xl hover:bg-teal-100 transition-colors flex flex-col items-center gap-2 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
                                <span className="font-bold text-teal-800">People</span>
                            </button>
                            <button onClick={() => saveSpore('#Ideas')} className="p-6 bg-amber-50 border border-amber-100 rounded-2xl hover:bg-amber-100 transition-colors flex flex-col items-center gap-2 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">💡</span>
                                <span className="font-bold text-amber-800">Ideas</span>
                            </button>
                            <button onClick={() => saveSpore('#Resources')} className="p-6 bg-blue-50 border border-blue-100 rounded-2xl hover:bg-blue-100 transition-colors flex flex-col items-center gap-2 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">📚</span>
                                <span className="font-bold text-blue-800">Resources</span>
                            </button>
                        </div>

                        <div className="mt-8 text-center">
                            <button onClick={() => setStep('RECORDING')} className="text-slate-400 hover:text-red-500 text-sm font-bold tracking-wide">
                                DISCARD SPORE
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* SAVED STATE */}
                {!showHistory && step === 'SAVED' && (
                    <motion.div
                        key="saved"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-10 flex flex-col items-center justify-center pointer-events-none"
                    >
                        <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-2xl font-black text-emerald-600">Spore Planted</h3>
                    </motion.div>
                )}

                {/* HISTORY STATE */}
                {showHistory && (
                    <motion.div
                        key="history"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="z-10 w-full max-w-4xl h-full flex flex-col mx-auto px-4"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-black text-slate-800">Spore Queue</h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setVisualizeId(prev => prev === 'global' ? null : 'global')}
                                    className={`px-3 py-1 text-xs font-bold rounded-full border transition-all ${visualizeId === 'global' ? 'bg-teal-500 text-white border-teal-500 shadow-teal-500/50 shadow-lg' : 'bg-white text-slate-500 border-slate-200'}`}
                                >
                                    🌍 Global
                                </button>
                                <button onClick={() => setShowHistory(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* GLOBAL GRAPH CONTAINER */}
                        <AnimatePresence>
                            {visualizeId === 'global' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 400, opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mb-4 flex-shrink-0"
                                >
                                    <MycelialGraph mode="global" spore={history[0] || { content: "Garden", id: "root" }} darkMode={darkMode} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                            {history.length === 0 ? (
                                <div className={`text-center mt-20 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>No spores captured yet.</div>
                            ) : (
                                history.map(spore => (
                                    <div key={spore.id} className={`p-4 rounded-xl border shadow-sm transition-all hover:shadow-md backdrop-blur-md ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-slate-100'}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex gap-2">
                                                {spore.tags.map((t: string) => (
                                                    <span key={t} className={`px-2 py-0.5 text-xs font-bold rounded-md ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>{t}</span>
                                                ))}
                                            </div>
                                            <span className={`text-[10px] font-bold uppercase tracking-wider ${spore.synced ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                {spore.synced ? 'Synced to Cloud' : 'Locally Saved'}
                                            </span>
                                        </div>

                                        {editingId === spore.id ? (
                                            <div className="mt-3">
                                                <textarea
                                                    value={editContent}
                                                    onChange={(e) => setEditContent(e.target.value)}
                                                    className={`w-full p-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-2 ${darkMode ? 'bg-slate-900 text-slate-200 border-slate-600' : 'bg-slate-50 text-slate-700 border-slate-200'}`}
                                                    rows={3}
                                                    autoFocus
                                                />
                                                <div className="flex justify-end gap-2">
                                                    <button onClick={() => setEditingId(null)} className={`px-3 py-1 text-xs font-bold border rounded-lg ${darkMode ? 'text-slate-400 border-slate-600 hover:text-slate-200' : 'text-slate-500 border-slate-200 hover:text-slate-700'}`}>Cancel</button>
                                                    <button onClick={() => saveEdit(spore.id)} className="px-3 py-1 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm">Save</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div onClick={() => startEditing(spore)} className={`group cursor-pointer p-1 -m-1 rounded-lg transition-colors ${darkMode ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'}`}>
                                                <p className={`text-sm font-medium leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                                    {spore.content || "(Empty Note)"}
                                                </p>
                                                <div className={`mt-3 flex justify-between items-center text-xs ${darkMode ? 'text-slate-500 group-hover:text-teal-400' : 'text-slate-400 group-hover:text-teal-600'}`}>
                                                    <div className="flex items-center gap-2">
                                                        <span>{new Date(spore.createdAt).toLocaleTimeString()}</span>
                                                        {spore.type === 'voice' && <span>🎤 Voice</span>}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {/* SYNC BUTTON */}
                                                        {!spore.synced && (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    sporeStore.syncOne(spore.id).then(() => loadHistory());
                                                                }}
                                                                className="px-3 py-1 bg-sky-100 text-sky-700 font-bold text-xs rounded-full hover:bg-sky-200 transition-all flex items-center gap-1 shadow-sm border border-sky-200"
                                                                title="Save to Neo-Cloud"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                </svg>
                                                                Save to Drive
                                                            </button>
                                                        )}

                                                        <button
                                                            onClick={(e) => toggleGraph(spore.id, e)}
                                                            className="opacity-0 group-hover:opacity-100 px-2 py-0.5 bg-indigo-100 text-indigo-600 font-bold rounded-full hover:bg-indigo-200 transition-all"
                                                        >
                                                            🕸 Graph
                                                        </button>
                                                        <span className="opacity-0 group-hover:opacity-100 text-[10px] font-bold uppercase bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">Edit</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* MYCELIAL GRAPH VISUALIZATION */}
                                        <AnimatePresence>
                                            {visualizeId === spore.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden mt-4"
                                                >
                                                    <MycelialGraph spore={spore} darkMode={darkMode} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            {!showHistory && (
                <button onClick={onBack} className="absolute bottom-6 text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-widest z-20">
                    Back to Garden
                </button>
            )}

            <style jsx>{`
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
        </div>
    );
}
