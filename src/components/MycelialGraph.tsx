import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { sporeStore } from '../lib/spore-store';

interface Node {
    id: string;
    label: string;
    type: 'core' | 'sub' | 'orbit';
    x: number;
    y: number;
    parentId?: string;
}

export default function MycelialGraph({ spore, mode = 'local', darkMode }: { spore: any, mode?: 'local' | 'global', darkMode?: boolean }) {
    // Initial State: Core Node
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<{ from: string, to: string }[]>([]);
    const [canvasWidth, setCanvasWidth] = useState(600);
    const canvasRef = useRef<HTMLDivElement>(null);

    // Initialize Graph Data based on Mode
    useEffect(() => {
        const initGraph = async () => {
            if (mode === 'global') {
                // GLOBAL MODE: Fetch ALL spores and arrange in a radial "Spore Logo" pattern
                const allSpores = await sporeStore.getAll();
                const centerNode: Node = { id: 'GARDEN_ROOT', label: 'THE GARDEN', type: 'core', x: 300, y: 300 };

                let newNodes = [centerNode];
                let newEdges: { from: string; to: string; }[] = [];

                allSpores.forEach((s, i) => {
                    // Golden Angle for nice distribution: 137.5 degrees
                    const angle = i * 137.5 * (Math.PI / 180);
                    // Radius grows with square root of index to maintain density
                    const radius = 100 + (15 * Math.sqrt(i));

                    const nodeX = 300 + Math.cos(angle) * radius;
                    const nodeY = 300 + Math.sin(angle) * radius;

                    newNodes.push({
                        id: s.id,
                        label: s.content.substring(0, 15) + '...',
                        type: 'orbit',
                        x: nodeX,
                        y: nodeY,
                        parentId: 'GARDEN_ROOT'
                    });

                    newEdges.push({ from: 'GARDEN_ROOT', to: s.id });
                });

                setNodes(newNodes);
                setEdges(newEdges);
                setCanvasWidth(800);
                setTimeout(() => canvasRef.current?.scrollTo({ left: 100, top: 100, behavior: 'smooth' }), 100);

            } else {
                // LOCAL MODE: Single Spore Focus
                setNodes([
                    { id: 'core', label: spore.content.substring(0, 15) + '...', type: 'core', x: 100, y: 150 }
                ]);
                setEdges([]);
                setCanvasWidth(600);
            }
        };

        initGraph();
    }, [mode, spore]);

    // Quick Input State
    const [addingToId, setAddingToId] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');

    const startAdd = (id: string, e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        setAddingToId(id);
        setInputValue('');
    };

    // --- ALGORITHM: Find Organic Position (No Overlap) ---
    const findOrganicPosition = (parentX: number, parentY: number, existingNodes: Node[]) => {
        // We want to place it vaguely to the right (progress), but with vertical variance
        // Mycelium grows out and fans

        const idealDistance = 160;
        let bestX = parentX + idealDistance;
        let bestY = parentY;
        let minOverlap = Infinity;

        // Try 10 random angles in a forward-facing arc (-60deg to +60deg)
        for (let i = 0; i < 15; i++) {
            // Angle between -70 and 70 degrees
            const angleDeg = (Math.random() * 140) - 70;
            const angleRad = angleDeg * (Math.PI / 180);

            const candidateX = parentX + (Math.cos(angleRad) * idealDistance);
            const candidateY = parentY + (Math.sin(angleRad) * idealDistance); // Y grows down in SVG

            // Clamp Y to stay in view container (approx height 320px) but relax for global
            const minY = mode === 'global' ? 50 : 40;
            const maxY = mode === 'global' ? 550 : 280;
            const clampedY = Math.max(minY, Math.min(maxY, candidateY));

            // Check collision with ALL existing nodes
            let maxProximity = 0; // The bigger this is, the worse the spot
            for (const n of existingNodes) {
                const dx = n.x - candidateX;
                const dy = n.y - clampedY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                // We want to be at least 100px away from anyone else
                if (dist < 100) {
                    maxProximity += (100 - dist); // Penalty
                }
            }

            if (maxProximity < minOverlap) {
                minOverlap = maxProximity;
                bestX = candidateX;
                bestY = clampedY;
            }
        }

        // Failsafe: If it's too crowded, just push it WAY right
        if (minOverlap > 50) {
            bestX = parentX + 220;
            bestY = Math.random() * 250 + 30;
        }

        return { x: bestX, y: bestY };
    };

    const confirmAdd = async () => {
        if (!addingToId || !inputValue.trim()) {
            setAddingToId(null);
            return;
        }

        // 1. Capture
        const newSporeId = await sporeStore.capture(inputValue, 'text');

        // 2. Visual Update
        const parentNode = nodes.find(n => n.id === addingToId);
        if (parentNode) {

            const { x: newX, y: newY } = findOrganicPosition(parentNode.x, parentNode.y, nodes);

            const newNode: Node = {
                id: newSporeId,
                label: inputValue.substring(0, 15) + '...',
                type: 'sub',
                x: newX,
                y: newY,
                parentId: addingToId
            };

            setNodes(prev => [...prev, newNode]);
            setEdges(prev => [...prev, { from: addingToId, to: newSporeId }]);

            // Expand canvas dynamically
            if (newX > canvasWidth - 150) setCanvasWidth(prev => prev + 400);

            // Auto-scroll to new node
            setTimeout(() => {
                if (canvasRef.current) {
                    canvasRef.current.scrollTo({ left: newX - 150, behavior: 'smooth' });
                }
            }, 100);
        }

        setAddingToId(null);
        setInputValue('');
    };

    return (
        <div
            ref={canvasRef}
            className={`relative w-full h-80 rounded-xl border-t border-b shadow-inner transition-colors overflow-x-auto overflow-y-hidden custom-scrollbar ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
        >

            {/* INLINE INPUT OVERLAY */}
            <AnimatePresence>
                {addingToId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                        onClick={() => setAddingToId(null)}
                    >
                        <div
                            className={`w-full max-w-sm p-6 rounded-2xl shadow-2xl ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white'}`}
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className={`text-sm font-bold mb-3 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>Spawn Connected Spore</h3>
                            <input
                                autoFocus
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && confirmAdd()}
                                placeholder="What grows from this?"
                                className={`w-full p-4 rounded-xl border mb-4 focus:ring-2 focus:ring-teal-500 outline-none shadow-inner ${darkMode ? 'bg-slate-900 border-slate-600 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                            />
                            <div className="flex justify-end gap-3">
                                <button onClick={() => setAddingToId(null)} className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-slate-600">Cancel</button>
                                <button onClick={confirmAdd} className="px-6 py-2 text-sm font-bold bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-400 transition-all active:scale-95">Grow</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{ width: canvasWidth, height: '100%', position: 'relative' }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: darkMode ? '#0f766e' : '#99f6e4', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: darkMode ? '#14b8a6' : '#2dd4bf', stopOpacity: 1 }} />
                        </linearGradient>
                        {/* Dashed line animation pattern */}
                        <mask id="mask-stripe">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        </mask>
                    </defs>

                    {edges.map((edge, i) => {
                        const from = nodes.find(n => n.id === edge.from);
                        const to = nodes.find(n => n.id === edge.to);
                        if (!from || !to) return null;

                        // Bezier Control Points for organic curve
                        const midX = (from.x + to.x) / 2;
                        // Use a control point that creates a slight "S" or organic arc, not just straight

                        return (
                            <g key={i}>
                                {/* Base Path (Dim) */}
                                <path
                                    d={`M ${from.x + 40} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - 40} ${to.y}`}
                                    fill="none"
                                    stroke={darkMode ? "#1e293b" : "#e2e8f0"}
                                    strokeWidth="4"
                                />
                                {/* Active "Nutrient" Flow Path */}
                                <path
                                    d={`M ${from.x + 40} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - 40} ${to.y}`}
                                    fill="none"
                                    stroke={darkMode ? "#2dd4bf" : "#0d9488"}
                                    strokeWidth="2"
                                    strokeDasharray="4 8"
                                    className="animate-flow"
                                    style={{ opacity: 0.6 }}
                                />
                            </g>
                        );
                    })}
                </svg>

                <AnimatePresence>
                    {nodes.map(node => (
                        <motion.div
                            key={node.id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                            className={`absolute flex items-center justify-center w-28 h-14 rounded-2xl shadow-lg text-[11px] font-bold text-center px-2 leading-tight border transition-colors group z-10 ${node.type === 'core'
                                ? 'bg-gradient-to-br from-teal-500 to-emerald-600 border-teal-400 text-white shadow-teal-900/50'
                                : (darkMode
                                    ? 'bg-slate-800 border-slate-600 text-slate-200 hover:border-teal-500 shadow-black/50'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-teal-400 shadow-slate-200')
                                }`}
                            style={{ left: node.x - 56, top: node.y - 28 }}
                        >
                            {node.label}

                            {/* ADD NODE BUTTON - LARGER TOUCH TARGET */}
                            {!addingToId && (
                                <button
                                    onClick={(e) => startAdd(node.id, e)}
                                    // Increased size to w-10 h-10 and z-50 for mobile tappability
                                    className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-transform active:scale-90 hover:scale-110 hover:bg-teal-400 border-2 border-white dark:border-slate-900"
                                    title="Add Connected Spore"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                                </button>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <style jsx global>{`
                @keyframes flow {
                    to { stroke-dashoffset: -12; }
                }
                .animate-flow {
                    animation: flow 1s linear infinite;
                }
            `}</style>
        </div>
    );
}
