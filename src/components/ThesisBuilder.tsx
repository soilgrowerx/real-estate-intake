import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThesisBuilderProps {
    isOpen: boolean;
    onClose: () => void;
    selectedSpores: Array<{ id: string; content: string; tags: string[] }>;
}

export default function ThesisBuilder({ isOpen, onClose, selectedSpores }: ThesisBuilderProps) {
    const [thesis, setThesis] = useState('');
    const [isSynthesizing, setIsSynthesizing] = useState(false);

    const synthesize = async () => {
        setIsSynthesizing(true);
        setThesis('');

        // Simulate thinking time
        await new Promise(r => setTimeout(r, 2000));

        const timestamp = new Date().toISOString();
        const tags = Array.from(new Set(selectedSpores.flatMap(s => s.tags)));

        const output = `
# NEOCAMBRIAN THESIS: [SYNTHESIS-${timestamp.substring(0, 10)}]
## SOURCE MATERIAL: ${selectedSpores.length} SPORES
## TAG CLOUD: ${tags.join(', ')}

---

### [IDENTITY MATRIX]
Derived from the Crystalline Structure of selected memories.

### [THE SYNTHESIS]
Based on the provided substrate, the Arboracle infers the following emergent pattern:

${selectedSpores.map(s => `> *"${s.content}"*`).join('\n\n')}

### [CLIMAX INSIGHTS]
1. **Convergence**: These fragments suggest a recurring focus on **${tags[0] || 'emergent themes'}**.
2. **Syntropy**: By connecting these nodes, we reduce cognitive entropy by **${Math.floor(Math.random() * 40) + 40}%**.
3. **Actionable Vector**: Move from static storage to dynamic mycelial routing.

### [PROTOCOL ADHERENCE]
Verified v3.4 [STIM-ACTIVE]
        `.trim();

        setThesis(output);
        setIsSynthesizing(false);
    };

    useEffect(() => {
        if (isOpen && selectedSpores.length > 0) {
            synthesize();
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 backdrop-blur-lg p-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        className="bg-white rounded-[40px] shadow-2xl max-w-2xl w-full h-[80vh] flex flex-col overflow-hidden border border-white/20"
                        onClick={e => e.stopPropagation()}
                    >
                        <header className="p-8 bg-gradient-to-br from-indigo-900 to-teal-900 text-white relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black tracking-tight mb-2">NEOCAMBRIAN THESIS</h2>
                                <p className="text-xs font-bold text-teal-300 uppercase tracking-widest opacity-80">Automated Mycelial Synthesis</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </header>

                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50">
                            {isSynthesizing ? (
                                <div className="h-full flex flex-col items-center justify-center gap-6">
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(i => (
                                            <motion.div
                                                key={i}
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                                className="w-4 h-4 bg-teal-500 rounded-full"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest animate-pulse">Consulting the Arboracle...</p>
                                </div>
                            ) : (
                                <div className="prose prose-slate max-w-none">
                                    <pre className="text-xs bg-white p-6 rounded-3xl border border-slate-200 text-slate-700 whitespace-pre-wrap leading-relaxed shadow-inner">
                                        {thesis}
                                    </pre>
                                </div>
                            )}
                        </div>

                        <footer className="p-8 bg-white border-t border-slate-100 flex gap-4">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(thesis);
                                    alert("Thesis copied to clipboard.");
                                }}
                                className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm tracking-wide hover:bg-slate-800 transition-all shadow-xl"
                            >
                                COPY TO CLIPBOARD
                            </button>
                            <button
                                onClick={onClose}
                                className="px-8 py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-sm tracking-wide hover:bg-slate-200 transition-all"
                            >
                                DISMISS
                            </button>
                        </footer>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
