import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sporeStore, Spore } from '../lib/spore-store';
import { ingestionService } from '../lib/ingestion-service';

/**
 * HarvestPanel: A slide-out interface that contains "Harvestable" blocks 
 * from external sources (Keep, Journal, etc.) and raw captured spores.
 */

const getPlatformConfig = (platform?: string) => {
    const config = {
        'slack': { icon: '💬', color: 'bg-purple-100 text-purple-600', label: 'Slack' },
        'whatsapp': { icon: '📱', color: 'bg-green-100 text-green-600', label: 'WhatsApp' },
        'whatsapp-voice': { icon: '🎤', color: 'bg-green-100 text-green-600', label: 'WA Voice' },
        'google-keep': { icon: '💡', color: 'bg-yellow-100 text-yellow-600', label: 'Google Keep' },
        'email': { icon: '📧', color: 'bg-blue-100 text-blue-600', label: 'Email' },
        'journal': { icon: '📓', color: 'bg-slate-100 text-slate-600', label: 'Journal' },
        'voice-capture': { icon: '🎙️', color: 'bg-teal-100 text-teal-600', label: 'Voice' },
        'default': { icon: '🌱', color: 'bg-slate-100 text-slate-400', label: 'Spore' }
    };
    return config[platform as keyof typeof config] || config.default;
};

export default function HarvestPanel({ onHarvest }: { onHarvest?: (item: Spore) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<Spore[]>([]);
    const [filterSilo, setFilterSilo] = useState(false);

    useEffect(() => {
        const loadItems = async () => {
            const allItems = await sporeStore.getAll();
            setItems(allItems);
        };

        loadItems();
        // Initial scavenge from server silo
        ingestionService.scavenge();

        // Subscribe to real-time local updates
        const unsub = sporeStore.subscribe(loadItems);

        // Periodic scavenger heartbeat (every 30s)
        const interval = setInterval(() => ingestionService.scavenge(), 30000);

        return () => {
            unsub();
            clearInterval(interval);
        };
    }, []);

    const onDragStart = (event: React.DragEvent, item: Spore) => {
        const p = getPlatformConfig(item.platform);
        // Map Spore to a format the Garden understands
        const dragData = {
            id: item.id,
            content: item.content,
            type: item.type,
            source: p.label,
            platform: item.platform,
        };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(dragData));
        event.dataTransfer.effectAllowed = 'move';
    };

    const handleSeed = async () => {
        await ingestionService.seedMockHarvest();
    };

    return (
        <div className="fixed left-0 top-[20%] z-[999] flex items-center h-fit">
            {/* Toggle Tab */}
            {/* Toggle Tab - hidden when open */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed left-0 top-[20%] z-[999] bg-indigo-600 text-white p-4 rounded-r-3xl shadow-[10px_0_40px_rgba(79,70,229,0.4)] hover:bg-indigo-700 transition-all flex flex-col items-center gap-3 border-y border-r border-indigo-500 group"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                        <div className="transition-transform duration-300">
                            <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <span className="text-xs font-black tracking-[0.2em] uppercase py-2 drop-shadow-md">HARVEST INSIGHTS</span>
                        {items.length > 0 && (
                            <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-black -rotate-90">
                                {items.length}
                            </span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -350 }}
                        animate={{ x: 0 }}
                        exit={{ x: -350 }}
                        className="fixed left-0 top-[20%] z-[1000] w-[90vw] md:w-[350px] bg-white/90 backdrop-blur-2xl h-[70vh] rounded-r-3xl border-y border-r border-slate-200 shadow-2xl overflow-hidden flex flex-col"
                    >
                        <header className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/30">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-white rounded-full text-indigo-600 shadow-sm hover:shadow-md transition-all"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <div>
                                    <h3 className="text-sm font-black text-slate-800 tracking-tighter">EXTERNAL HARVEST</h3>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ready to Myceliate</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setFilterSilo(!filterSilo)}
                                className={`px-3 py-1.5 rounded-full text-[9px] font-black transition-all border ${filterSilo ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300'}`}
                            >
                                {filterSilo ? 'SILO ONLY ON' : 'SHOW ALL'}
                            </button>
                        </header>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/30">
                            {(() => {
                                const filtered = filterSilo ? items.filter(i => i.tags.includes('Silo') || i.tags.includes('Harvested')) : items;
                                if (filtered.length === 0) return (
                                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 opacity-50">
                                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{filterSilo ? 'No incoming data' : 'The silos are empty'}</p>
                                        <p className="text-[10px] text-slate-300 mt-2">{filterSilo ? 'Checking server-side inbox...' : 'Capture text or voice notes to see them here.'}</p>
                                    </div>
                                );
                                return filtered.map(item => {
                                    const p = getPlatformConfig(item.platform);
                                    return (
                                        <div
                                            key={item.id}
                                            draggable
                                            onDragStart={(e) => onDragStart(e, item)}
                                            className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 cursor-grab active:cursor-grabbing transition-all group relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 opacity-20" />
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-wider ${p.color}`}>
                                                        {p.icon} {p.label}
                                                    </span>
                                                    <span className={`w-1 h-1 rounded-full ${item.type === 'voice' ? 'bg-teal-400' : 'bg-slate-300'}`} />
                                                </div>
                                                <span className="text-[8px] font-bold text-slate-300">{new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                            <p className="text-xs font-bold text-slate-700 leading-relaxed line-clamp-3">
                                                {item.content || "(No transcription available)"}
                                            </p>
                                            <div className="mt-4 flex flex-wrap gap-1">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="text-[7px] font-black text-indigo-400 uppercase bg-indigo-50 px-2 py-0.5 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                                <span className="text-[9px] font-black text-indigo-500 tracking-tighter">DRAG TO PLANT</span>
                                                <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>

                        <footer className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest gap-4">
                                        <span>Local Node Sync</span>
                                        <span className="text-teal-500">Active</span>
                                    </div>
                                    <div className="w-[150px] bg-slate-200 h-1 rounded-full overflow-hidden">
                                        <motion.div
                                            className="bg-teal-500 h-full"
                                            animate={{ width: ['0%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleSeed}
                                    className="px-3 py-2 bg-indigo-600 text-white text-[9px] font-black uppercase rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all whitespace-nowrap"
                                >
                                    Seed Harvest
                                </button>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-tight mb-2">Bio-Harvester Tools</h4>
                                <div className="p-3 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">☄️</span>
                                        <span className="text-[9px] font-bold text-slate-600 uppercase">One-Click Harvester</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const token = 'GARDEN_HARVEST_TOKEN_2026';
                                            const code = `javascript:(function(){const t="${token}",c=window.getSelection().toString()||document.title,u=window.location.href;fetch("http://localhost:3000/api/ingest",{method:"POST",headers:{"Content-Type":"application/json","X-Garden-Token":t},body:JSON.stringify({content:c,source:"browser",type:"text",sourceUrl:u,tags:["WebHarvest"]})}).then(()=>alert("Harvested to Garden!")).catch(e=>alert("Harvest Error: "+e));})();`;
                                            navigator.clipboard.writeText(code);
                                            alert("Bookmarklet copied! Drag it to your bookmarks bar.");
                                        }}
                                        className="text-[8px] font-black text-indigo-500 hover:text-indigo-700 transition-colors uppercase"
                                    >
                                        Copy Code
                                    </button>
                                </div>
                            </div>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
