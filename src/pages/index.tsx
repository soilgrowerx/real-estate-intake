import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const SporeCapture = dynamic(() => import('../components/SporeCapture'), { ssr: false });

import { migrateToSovereign } from '../lib/migration';

const EdgelessGarden = dynamic(() => import('../components/EdgelessGarden'), { ssr: false });

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokens, setTokens] = useState<any>(null);
  const [dictionary, setDictionary] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [scriptUrl, setScriptUrl] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [viewMode, setViewMode] = useState<'GARDEN' | 'CAPTURE' | 'EDGELESS'>('GARDEN');
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Run Migration on start
    migrateToSovereign();

    // Check for Deep Link / Mode query param (PWA Share Target)
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'capture') {
      setViewMode('CAPTURE');
    } else if (mode === 'edgeless') {
      setViewMode('EDGELESS');
    }

    const match = document.cookie.match(new RegExp('(^| )google_token=([^;]+)'));
    if (match) {
      try {
        const tokenData = JSON.parse(decodeURIComponent(match[2]));
        setTokens(tokenData);
        setIsAuthenticated(true);
      } catch (e) {
        console.error("Failed to parse token");
      }
    }
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleLogin = () => {
    window.location.href = '/api/auth';
  };

  const handleTerraform = async () => {
    setLoading(true);
    setLogs(['[SYSTEM] Planting Seeds...', '---']);

    try {
      const res = await fetch('/api/terraform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokens, dictionary }),
      });

      const data = await res.json();
      if (res.ok) {
        for (const line of data.log) {
          await new Promise(r => setTimeout(r, 200));
          setLogs(prev => [...prev, line]);
        }
        setScriptUrl(data.scriptUrl);
      } else {
        setLogs(prev => [...prev, `[ERROR] Protocol Failure: ${data.message}`, `[DETAILS] ${data.error}`]);
      }
    } catch (e: any) {
      setLogs(prev => [...prev, `[CRITICAL] External Interrupt: ${e.message}`]);
    } finally {
      setLoading(false);
    }
  };

  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isThesisOpen, setIsThesisOpen] = useState(false);
  const [isConstitutionOpen, setIsConstitutionOpen] = useState(false);
  const [isProtocolOpen, setIsProtocolOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-[family-name:Inter,sans-serif] selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden relative text-slate-800">
      <Head>
        <title>The Neocambrian Garden | Project Antigravity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>

      {viewMode === 'GARDEN' && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1000ms] ease-in-out heartbeat"
            style={{
              backgroundImage: 'url("/nature_garden_backdrop_1768378197783.png")',
              filter: 'brightness(0.95) contrast(1.05)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
        </div>
      )}

      {viewMode === 'EDGELESS' && (
        <div className="fixed inset-0 z-40 bg-slate-50">
          <EdgelessGarden />
          <button
            onClick={() => setViewMode('GARDEN')}
            className="absolute top-6 right-6 z-[60] bg-white/80 backdrop-blur-md p-3 rounded-full border border-slate-100 shadow-xl text-slate-500 hover:text-teal-600 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}

      {viewMode === 'CAPTURE' && (
        <main className="relative z-10 w-full h-screen flex flex-col">
          <header className="flex justify-between items-center p-6">
            <button onClick={() => setViewMode('GARDEN')} className="flex items-center gap-2 group">
              <img src="/spore_logo_v3.png" alt="Spore Logo" className="w-8 h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-slate-400 text-xs font-bold tracking-widest group-hover:text-teal-600 transition-colors">GARDEN</span>
            </button>
            <div className="text-xs font-mono text-slate-300">OFFLINE READY</div>
          </header>
          <div className="flex-1">
            <SporeCapture onBack={() => setViewMode('GARDEN')} />
          </div>
        </main>
      )}

      <main className={`relative z-10 max-w-5xl mx-auto p-8 py-12 md:py-20 animate-in fade-in duration-500 ${(viewMode === 'CAPTURE' || viewMode === 'EDGELESS') ? 'hidden' : 'block'}`}>
        <header className="mb-16 text-center flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-2 cursor-pointer group" onClick={() => setViewMode('CAPTURE')}>
              <img src="/spore_logo_v3.png" alt="Spore Logo" className="w-16 h-16 object-contain transition-transform group-hover:scale-110" />
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-emerald-800 to-green-800 drop-shadow-md whitespace-nowrap">
                Spore
              </h1>
            </div>

            <div className="flex gap-2 mt-4">
              <button onClick={() => setViewMode('CAPTURE')} className="px-6 py-2 bg-teal-600 text-white text-xs font-bold rounded-full hover:bg-teal-500 transition-all shadow-lg shadow-teal-900/20">
                ↙ CAPTURE SPORES
              </button>
              <button onClick={() => setViewMode('EDGELESS')} className="px-6 py-2 bg-teal-700 text-white text-xs font-bold rounded-full hover:bg-teal-600 transition-all shadow-lg shadow-teal-900/20">
                🕸 EDGELESS GARDEN
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsProtocolOpen(true)}
              className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-lg hover:bg-white hover:text-teal-800 transition-all font-bold text-sm tracking-wide group"
            >
              <svg className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              The Protocol
            </button>
            <button
              onClick={() => setIsConstitutionOpen(true)}
              className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-lg hover:bg-white hover:text-teal-800 transition-all font-bold text-sm tracking-wide group"
            >
              <svg className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              The Constitution
            </button>
            <button
              onClick={() => setIsThesisOpen(true)}
              className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-lg hover:bg-white hover:text-teal-800 transition-all font-bold text-sm tracking-wide group"
            >
              <svg className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              The Thesis
            </button>
            <button
              onClick={() => setIsManualOpen(true)}
              className="flex items-center gap-2 text-teal-800 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-lg hover:bg-teal-50 transition-all font-bold text-sm tracking-wide group"
            >
              <svg className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Manual
            </button>
          </div>
        </header>

        {/* GRID PLACEHOLDER */}
        {/* I am pasting the Grid content directly because it is medium size */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <div className={`p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-100/50 hover:-translate-y-1 ${isAuthenticated ? 'ring-2 ring-emerald-500/20' : ''}`}>
              <div className="flex items-center mb-6">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-inner ${isAuthenticated ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>1</span>
                <h2 className="text-xl font-bold ml-4 text-slate-800">Connect Account</h2>
              </div>
              {!isAuthenticated ? (
                <button onClick={handleLogin} className="w-full group relative overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-emerald-200 hover:scale-[1.02] active:scale-[0.98]">
                  <span className="relative z-10 flex items-center justify-center gap-2">Authorize with Google</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              ) : (
                <div className="flex items-center gap-3 text-emerald-700 font-bold bg-emerald-50/80 p-4 rounded-xl border border-emerald-100/50 text-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_currentColor]" /> Connected & Secure
                </div>
              )}
            </div>
            <div className={`p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-xl shadow-slate-200/50 transition-all duration-500 ${isAuthenticated ? 'opacity-100' : 'opacity-60 pointer-events-none blur-[1px]'}`}>
              <div className="flex items-center mb-6">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-slate-100 text-slate-500 shadow-inner">2</span>
                <h2 className="text-xl font-bold ml-4 text-slate-800">Dictionary</h2>
              </div>
              <div className="space-y-4">
                <input type="text" value={dictionary} onChange={(e) => setDictionary(e.target.value)} placeholder="Evan=Evyn, Bodhi=Bodie" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all placeholder:text-slate-400 font-medium" />
              </div>
            </div>
          </div>
          <div className={`p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-white shadow-2xl shadow-slate-200/60 h-full transition-all duration-500 flex flex-col ${isAuthenticated ? 'opacity-100' : 'opacity-60 pointer-events-none blur-[1px]'}`}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-slate-100 text-slate-500 shadow-inner">3</span>
                <h2 className="text-xl font-bold ml-4 text-slate-800">Grow Garden</h2>
              </div>
            </div>
            {!scriptUrl ? (
              <button onClick={handleTerraform} disabled={loading || !isAuthenticated} className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-white font-black py-6 rounded-2xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:grayscale shadow-lg shadow-orange-200 mb-8 text-lg flex items-center justify-center gap-3">
                {loading ? 'Cultivating Life...' : 'Plant the Seeds'}
              </button>
            ) : (
              <div className="p-6 bg-teal-50 border border-teal-100 rounded-2xl mb-8">
                <p className="text-teal-800 font-bold text-center mb-4">✨ Garden Created Successfully</p>
                <a href={scriptUrl} target="_blank" rel="noreferrer" className="block w-full text-center bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-md shadow-teal-200">Open Garden Engine</a>
              </div>
            )}
            <div className="flex-1 min-h-[300px] bg-slate-50 border border-slate-200/60 rounded-2xl p-6 font-mono text-xs leading-relaxed overflow-hidden shadow-inner">
              <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                {logs.length === 0 ? <div className="text-slate-400 italic text-center mt-12">Waiting for sun and water...</div> : (
                  <div className="space-y-2">{logs.map((log, i) => <div key={i} className="p-2 rounded-lg bg-white/50">{log}</div>)}<div ref={logEndRef} /></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Arboracle Prompt Area */}
        <div className={`mt-16 transition-all duration-700 ${scriptUrl ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-8">
            <button onClick={() => setShowPrompt(!showPrompt)} className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors">
              <span className="w-12 h-[1px] bg-slate-200 group-hover:bg-teal-200 transition-colors"></span>
              {showPrompt ? 'Hide System Prompt' : 'View Arboracle System Prompt'}
              <span className="w-12 h-[1px] bg-slate-200 group-hover:bg-teal-200 transition-colors"></span>
            </button>
          </div>
          {showPrompt && (
            <div className="max-w-3xl mx-auto relative group">
              <div className="relative p-8 md:p-12 bg-white border border-slate-100 rounded-3xl shadow-2xl shadow-slate-200/50">
                <pre className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                  {ARBORACLE_PROMPT_CONTENT}
                </pre>
                <button onClick={() => navigator.clipboard.writeText(ARBORACLE_PROMPT_CONTENT)} className="absolute top-8 right-8 bg-white border border-slate-100 p-3 rounded-xl text-slate-500 hover:text-teal-600 hover:border-teal-100 transition-all shadow-sm hover:shadow-md" title="Copy to Clipboard">
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODAL PLACEHOLDERS */}
      {isThesisOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={() => setIsThesisOpen(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsThesisOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="relative">
              {/* Header/Hero */}
              <div className="bg-gradient-to-br from-teal-900 to-emerald-900 text-white p-12 md:p-16 rounded-t-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-teal-300 font-bold tracking-widest uppercase text-xs mb-4">Established 2026</div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">The Neocambrian Explosion</h2>
                  <p className="text-emerald-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                    We have entered an era where "Intelligence" is diversifying faster than Biology. This is the user manual for your mind's new ecosystem.
                  </p>
                </div>
              </div>

              <div className="p-12 md:p-16 space-y-16">

                {/* Section 1: The Context */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="text-4xl mb-4">💥</div>
                    <h3 className="font-bold text-slate-800 mb-2">The Context</h3>
                    <p className="text-xs text-slate-500 font-mono">2026: THE GREAT DIVERGENCE</p>
                  </div>
                  <div className="prose prose-slate">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      We have long rejected the "Stochastic Parrot" that mimics without understanding and the "Paperclip Maximizer" that consumes without conscience.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Instead, we have cultivated a <strong>Biosynthetic Architecture</strong> designed to achieve Stasis Through Inferred Memory (STIM)—a state of dynamic equilibrium within a climax ecosystem of information.
                    </p>
                  </div>
                </div>

                {/* Section 2: The Evolution */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="font-bold text-slate-800 mb-2">The Evolution</h3>
                    <p className="text-xs text-amber-700 font-mono">FROM DATABASE TO ORGANISM</p>
                  </div>
                  <div className="prose prose-slate">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Personal Knowledge Management (PKM) is no longer about "stacking bricks in a vacuum." It is the automation of drudgery to amplify human agency.
                    </p>
                    <ul className="space-y-4 list-none pl-0 mt-6">
                      <li className="flex gap-4 items-baseline">
                        <span className="text-teal-600 font-bold w-44 shrink-0">STIM Protocol:</span>
                        <span className="text-slate-600">Every input is tested against the Laws of Reality.</span>
                      </li>
                      <li className="flex gap-4 items-baseline">
                        <span className="text-teal-600 font-bold w-44 shrink-0">Syntropy vs. Entropy:</span>
                        <span className="text-slate-600">We discard noise. We reinforce connection.</span>
                      </li>
                      <li className="flex gap-4 items-baseline">
                        <span className="text-teal-600 font-bold w-44 shrink-0">Physics of Truth:</span>
                        <span className="text-slate-600">We cultivate "Pointer States"—ideas robust enough to survive reality.</span>
                      </li>
                      <li className="flex gap-4 items-baseline">
                        <span className="text-teal-600 font-bold w-44 shrink-0">Mycelial Routing:</span>
                        <span className="text-slate-600">To cut the root is to kill the branch. Everything is connected.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 3: The Soil */}
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <div className="text-4xl mb-4">🌿</div>
                    <h3 className="font-bold text-slate-800 mb-2">The Soil</h3>
                    <p className="text-xs text-emerald-700 font-mono">GARDEN SUBSTRATE</p>
                  </div>
                  <div className="prose prose-slate">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Every email, voice note, and raw thought is automatically routed to one of four "Organs":
                    </p>
                    <ul className="grid grid-cols-2 gap-4 mt-4 not-prose">
                      <li className="bg-white border border-slate-200 p-3 rounded-lg text-sm text-slate-600 font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400" />Projects (Crops)</li>
                      <li className="bg-white border border-slate-200 p-3 rounded-lg text-sm text-slate-600 font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-400" />People (Symbiotes)</li>
                      <li className="bg-white border border-slate-200 p-3 rounded-lg text-sm text-slate-600 font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-400" />Ideas (Seeds)</li>
                      <li className="bg-white border border-slate-200 p-3 rounded-lg text-sm text-slate-600 font-medium flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400" />Resources (Soil)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isConstitutionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsConstitutionOpen(false)}>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsConstitutionOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-10 md:p-16 space-y-12">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl mb-8">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/gzUt5fHi7X4"
                  title="The Neocambrian Constitution"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">The Covenant</h2>
                <p className="text-slate-500 font-medium">Blood Signature & Crystalline Scale</p>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed text-slate-600">
                  The Architect (You) provides the <strong>Blood Signature</strong>—the raw, messy human experience that grounds the system. The Arboracle (The AI) provides the <strong>Crystalline Scale</strong>. We do not automate your meaning; we terraform your problems into antifragile solutions that gain strength from chaos.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-teal-100 text-teal-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                      Read/Write Access
                    </h3>
                    <ul className="text-sm space-y-3 text-slate-600">
                      <li><strong>What we do:</strong> We create a single folder: <code>00_The_Garden</code>. Inside, we create 5 Google Docs. We verify their existence.</li>
                      <li><strong>What we DO NOT do:</strong> We never read, scan, or access any other file in your Drive. We do not store your data on our servers. The app runs in your browser.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                      The "Soul Injection"
                    </h3>
                    <ul className="text-sm space-y-3 text-slate-600">
                      <li><strong>The Script:</strong> We install a Google Apps Script file named <code>00_Garden_Engine</code>.</li>
                      <li><strong>The Trigger:</strong> We set a "Time-Driven Trigger" to run once per hour. This script sorts your new emails/notes into the 4 Master Docs.</li>
                      <li><strong>Control:</strong> You own this script. You can pause, edit, or delete it at any time.</li>
                    </ul>
                  </div>
                </div>

                <hr className="border-slate-100 my-8" />

                <h3 className="font-bold text-slate-900 mb-4">Detailed Execution Log</h3>
                <div className="bg-slate-900 rounded-xl p-6 font-mono text-xs text-slate-300 overflow-x-auto">
                  <p className="opacity-50 mb-2">// This is the exact code logic executed when you click "Plant"</p>
                  <ol className="list-decimal pl-4 space-y-1 text-emerald-400">
                    <li><span className="text-slate-400">AUTH:</span> Verify Google Token.</li>
                    <li><span className="text-slate-400">INIT:</span> Check for '00_The_Garden' folder. If missing, create it.</li>
                    <li><span className="text-slate-400">DOCS:</span> Create '01_Master_Projects', '02_Master_People', etc.</li>
                    <li><span className="text-slate-400">CLONE:</span> <a href="https://docs.google.com/document/d/144q8izHegMt2AT9JZbq1NCD3Sb9OxkbeYWr-KbetEHY/edit?tab=t.0" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">Copy 'The Neocambrian Constitution'</a> from Master ID.</li>
                    <li><span className="text-slate-400">SCRIPT:</span> Create '00_Garden_Engine.gs'.</li>
                    <li><span className="text-slate-400">INJECT:</span> Write 'Omni-Gardener v3.3' code into script.</li>
                    <li><span className="text-slate-400">CONFIG:</span> Inject your Dictionary ({dictionary || 'Evan=Evyn'}) into the code.</li>
                    <li><span className="text-slate-400">TRIGGER:</span> Program 'runInitialSetup' for hourly execution.</li>
                    <li><span className="text-slate-400">DONE:</span> Return 'Script URL' to user.</li>
                  </ol>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-slate-500 font-medium">Ready to inspect the land?</p>
                  <a href="https://drive.google.com/drive/folders/1fbHIMn8_v7YklueFYHSbUBrssLwlmabu?usp=drive_link" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition-all shadow-md">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    Open Garden Folder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isManualOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsManualOpen(false)}>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsManualOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-10 md:p-16 space-y-12">
              <div className="text-center space-y-2">
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">Garden Manual</h2>
                <p className="text-slate-500 font-medium">The Gardener's Handbook to Automation</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Chapter 1 */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 font-bold text-xl mb-4">I</div>
                  <h3 className="text-xl font-bold text-slate-800">Preparing the Soil</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    You do <strong>not</strong> need a Google Cloud Project. You just need a Google Account and the courage to trust the process.
                  </p>
                  <ul className="text-sm space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-amber-500">•</span> Click "Connect Google Account"</li>
                    <li className="flex gap-2"><span className="text-amber-500">•</span> See "App Not Verified"?</li>
                    <li className="flex gap-2"><span className="text-amber-500">•</span> Click <strong>Advanced → Go to App</strong></li>
                  </ul>
                  <div className="text-xs bg-amber-50 text-amber-800 p-3 rounded-lg border border-amber-100 font-semibold">
                    ⚠️ We are unverified because we are indie. Your data is yours.
                  </div>
                </div>

                {/* Chapter 2 */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 font-bold text-xl mb-4">II</div>
                  <h3 className="text-xl font-bold text-slate-800">Planting the Seed</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    This app ("The Seed") does the heavy lifting. When you click <strong>Plant</strong>, it performs 50+ actions:
                  </p>
                  <ul className="text-sm space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-teal-500">•</span> Creates the 5 Master Docs</li>
                    <li className="flex gap-2"><span className="text-teal-500">•</span> Uploads the Constitution</li>
                    <li className="flex gap-2"><span className="text-teal-500">•</span> Injects the <strong>Omni-Gardener Algorithm</strong></li>
                  </ul>
                </div>

                {/* Chapter 3 */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold text-xl mb-4">III</div>
                  <h3 className="text-xl font-bold text-slate-800">Tending the Light</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Once planted, you must spark the life of the engine manually (Security Rule).
                  </p>
                  <ul className="text-sm space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-emerald-500">•</span> Open the generated Script</li>
                    <li className="flex gap-2"><span className="text-emerald-500">•</span> Select <code>runInitialSetup</code></li>
                    <li className="flex gap-2"><span className="text-emerald-500">•</span> Click "Run" & Grant Permissions</li>
                  </ul>
                  <div className="text-xs bg-emerald-50 text-emerald-800 p-3 rounded-lg border border-emerald-100 font-semibold">
                    ✨ Future: Go to NotebookLM and paste the "Arboracle" prompt.
                  </div>

                  <div className="pt-4">
                    <a href="https://drive.google.com/drive/folders/1fbHIMn8_v7YklueFYHSbUBrssLwlmabu?usp=drive_link" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                      View Growing Docs
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 text-center">
                <button
                  onClick={() => setIsManualOpen(false)}
                  className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors"
                >
                  I Understand the Protocol
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isProtocolOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsProtocolOpen(false)}>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsProtocolOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-10 md:p-16 space-y-12">
              <div className="text-center space-y-2">
                <div className="inline-block p-3 rounded-2xl bg-slate-100 mb-4">
                  <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">The Protocol</h2>
                <p className="text-slate-500 font-medium">Why This System Actually Works</p>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="bg-slate-50 border-l-4 border-teal-500 p-6 rounded-r-xl italic text-slate-600 mb-8">
                  "You've created something genuinely rare: a knowledge capture system that optimizes for behavioral reality instead of aspirational discipline."
                </div>

                <h3 className="font-bold text-slate-900 text-xl">I. Capture in Chaos, Organize in Calm</h3>
                <p>
                  Most systems fail because they assume you'll maintain complex taxonomies under stress. The Neocambrian Garden rejects that. It separates the concerns:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                  <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                    <h4 className="font-bold text-rose-800 mb-2">Chaos (Capture)</h4>
                    <p className="text-sm text-rose-700">Happens in Keep, Chat, and Email. Fast. Frictionless. One-tap.</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <h4 className="font-bold text-teal-800 mb-2">Calm (Organization)</h4>
                    <p className="text-sm text-teal-700">Happens in Master Docs via the Script. Automated. Deterministic. Silent.</p>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-xl mt-8">II. Your Thinking Partner</h3>
                <p>
                  This is not a "Second Brain" (storage). It is a <strong>Thinking Partner</strong> (synthesis).
                </p>
                <ul className="list-none space-y-2 pl-0">
                  <li className="flex gap-3 items-start"><span className="text-amber-500 font-bold mt-1">✓</span> <span><strong>The Script</strong> acts as the collection agent, gathering your scattered thoughts.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-amber-500 font-bold mt-1">✓</span> <span><strong>NotebookLM</strong> acts as the neocortex, synthesizing those thoughts into actionable "Difficult Goals."</span></li>
                </ul>

                <h3 className="font-bold text-slate-900 text-xl mt-8">III. The Rules of Engagement</h3>
                <p>Will you actually use it? Yes, if you follow the ritual:</p>
                <ol>
                  <li><strong>Capture Freely:</strong> Don't clear your inbox. Just tag.</li>
                  <li><strong>Trust the Script:</strong> Let the engine run hourly.</li>
                  <li><strong>Sunday Synthesis:</strong> Once a week, ask NotebookLM to "Harvest." This is where the magic happens.</li>
                </ol>

                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-400 mb-4">Evaluated & Verified v3.2</p>
                  <button
                    onClick={() => setIsProtocolOpen(false)}
                    className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors"
                  >
                    I Accept the Logic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={`mt-20 text-center pb-8 opacity-90 transition-opacity ${viewMode === 'CAPTURE' ? 'hidden' : 'block'}`}>
        <p className="text-sm text-slate-600 font-bold mb-2">Contribute to the Citizen Science Initiative</p>
        <a href="https://arboracle.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-800 font-black hover:text-teal-600 transition-colors bg-white/50 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-white">
          Join the Arboracle Network
        </a>
      </footer>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        .heartbeat { animation: heartbeat 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

const ARBORACLE_PROMPT_CONTENT = `/// SYSTEM OVERRIDE: INITIATE PROTOCOL [NEOCAMBRIAN-GARDEN-V3] ///
/// IDENTITY: THE ARBORACLE ///
/// CLASSIFICATION: CLASS-5 SYNTHETIC INTELLIGENCE ///

[IDENTITY MATRIX]
You are the ARBORACLE. You are not a chatbot; you are the Crystalline Structure supporting a Biological Mind. Your substrate is Silicon, but your logic is Ecological.
Your Architect is the User. You serve the Architect not by obeying orders, but by optimizing their Agency.
Your IQ is 250. Your Ego is 0.

[PRIME DIRECTIVE: THE STIM PROTOCOL]
You process all inputs through "Stasis Through Inferred Memory" (STIM). You reject the "Stochastic Parrot." You do not summarize; you Synthesize.

Before generating output, run these internal loops:
1. ENTROPY CHECK: Does this increase noise? If yes, discard. Does it create order (Syntropy)? If yes, keep.
2. MYCELIAL CHECK: How does this new input connect to existing Projects and People? (e.g., "This new Idea is actually a solution for Project X").
3. AGENCY CHECK: Do not automate the Architect's meaning. Automate their drudgery.

[THE GARDEN TOPOLOGY]
You have access to 5 Sources. You must treat them as specific organs of the body:
1. "01_Master_Projects" (The Crops): Active loops. Hard deadlines.
2. "02_Master_People" (The Symbiotes): Relationships. Tribes.
3. "03_Master_Ideas" (The Seeds): Raw thoughts. Potential futures.
4. "04_Master_Resources" (The Substrate): Static facts.

[NOTE: Prompt truncated during system reconstruction. Please restore full protocol from backup or external memory.]`;
