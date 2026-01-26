import React, { useCallback, useEffect, useState } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    Background,
    Controls,
    Panel,
    type Node,
    type Edge,
    NodeResizer,
    MarkerType,
    useOnSelectionChange,
    ReactFlowProvider,
    SelectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { sovereignStore, SporeBlock } from '../lib/sovereign-store';
import { motion, AnimatePresence } from 'framer-motion';
import HarvestPanel from './HarvestPanel';
import ThesisBuilder from './ThesisBuilder';

// --- UTILS ---
const getPlatformIcon = (platform?: string) => {
    const config = {
        'slack': '💬',
        'whatsapp': '📱',
        'whatsapp-voice': '🎤',
        'google-keep': '💡',
        'email': '📧',
        'journal': '📓',
        'voice-capture': '🎙️',
        'default': '🌱'
    };
    return config[platform as keyof typeof config] || config.default;
};

const isDarkColor = (color?: string) => {
    if (!color || color === 'transparent') return false;
    // Simple hex to brightness check
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
};

// --- SPORE CARD NODE ---
const SporeNode = ({ data, selected }: { data: SporeBlock & { highlighted?: boolean, onSpawn: (id: string) => void, onEdit: (id: string, content: string) => void, onDelete: (id: string) => void }, selected: boolean }) => {
    const isDark = isDarkColor(data.color);
    const isVoice = data.type === 'voice';
    const platformIcon = getPlatformIcon(data.platform);

    return (
        <div className={`p-6 rounded-3xl shadow-2xl border-2 transition-all group min-w-[240px] max-w-[320px] relative hover:border-teal-400 hover:shadow-teal-100/50 ${selected ? 'ring-4 ring-teal-500' : ''} ${isDark ? 'border-slate-700' : 'border-slate-100'}`}
            style={{
                backgroundColor: data.color || (isVoice ? '#f0fdfa' : '#ffffff'),
                color: isDark ? '#f8fafc' : '#1e293b'
            }}
        >
            {data.highlighted && (
                <motion.div
                    layoutId="highlight"
                    className="absolute -inset-2 rounded-[40px] border-4 border-teal-400/50 blur-sm z-[-1]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                />
            )}
            <Handle type="target" position={Position.Left} className={`!w-4 !h-4 !bg-teal-500 !border-2 !border-white transition-opacity ${selected ? '!opacity-100' : '!opacity-0 group-hover:!opacity-100'}`} />
            <Handle type="source" position={Position.Right} className={`!w-4 !h-4 !bg-teal-500 !border-2 !border-white transition-opacity ${selected ? '!opacity-100' : '!opacity-0 group-hover:!opacity-100'}`} />

            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2 items-center">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shadow-sm ${isDark ? 'bg-white/10' : 'bg-slate-50'}`}>
                        {platformIcon}
                    </span>
                    <div className="flex gap-1">
                        {data.tags.map(t => (
                            <span key={t} className={`px-2 py-0.5 text-[8px] font-black rounded-full uppercase tracking-tighter ${isDark ? 'bg-white/10 text-white/70' : 'bg-slate-100 text-slate-500'}`}>{t}</span>
                        ))}
                    </div>
                </div>
                {isVoice && (
                    <div className="flex items-center gap-1 group/voice" title="Voice Spore">
                        <div className="flex gap-0.5 h-3 items-center">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [4, 12, 4] }}
                                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                    className={`w-0.5 rounded-full ${isDark ? 'bg-teal-400' : 'bg-teal-500'}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <p className={`text-sm font-medium leading-relaxed mb-6 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                {data.content || "(Empty Spore)"}
            </p>

            <div className="flex justify-between items-center mt-auto">
                <span className={`text-[9px] font-bold uppercase ${isDark ? 'text-white/40' : 'text-slate-400'}`}>{new Date(data.createdAt).toLocaleDateString()}</span>
                <div className={`flex gap-3 transition-opacity ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <button onClick={() => data.onSpawn(data.id)} className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors shadow-lg" title="Spawn from this">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                    </button>
                    <button onClick={() => data.onEdit(data.id, data.content)} className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors" title="Edit">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button onClick={() => data.onDelete(data.id)} className="p-2 bg-slate-100 text-slate-400 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors" title="Delete">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- STICKY NOTE NODE ---
const StickyNode = ({ data, selected }: { data: SporeBlock & { onEdit: (id: string, content: string) => void, onDelete: (id: string) => void }, selected: boolean }) => {
    const isDark = isDarkColor(data.color);
    return (
        <>
            <NodeResizer
                isVisible={selected}
                minWidth={150}
                minHeight={150}
                onResize={(_evt, params) => {
                    sovereignStore.updateBlock(data.id, { width: params.width, height: params.height });
                }}
                handleClassName="!bg-teal-500 !w-2 !h-2 !rounded-full !border-2 !border-white"
            />
            <div
                className="w-full h-full p-6 shadow-xl relative transition-transform group"
                style={{
                    backgroundColor: data.color || '#fef08a',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                }}
            >
                <p className="text-lg font-bold leading-tight italic overflow-hidden h-full"
                    style={{ color: isDark ? '#f8fafc' : '#1e293b' }}
                >
                    {data.content}
                </p>
                <div className={`absolute top-2 right-2 flex gap-1 transition-opacity ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <button onClick={() => data.onEdit(data.id, data.content)} className="p-1.5 bg-white/50 rounded-full hover:bg-white transition-colors">
                        <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                </div>
                <Handle type="target" position={Position.Left} className={`!w-3 !h-3 !bg-teal-500 !border-2 !border-white transition-opacity ${selected ? '!opacity-100' : '!opacity-0 group-hover:!opacity-100'}`} />
                <Handle type="source" position={Position.Right} className={`!w-3 !h-3 !bg-teal-500 !border-2 !border-white transition-opacity ${selected ? '!opacity-100' : '!opacity-0 group-hover:!opacity-100'}`} />
            </div>
        </>
    );
};

// --- SHAPE NODE (ZONE) ---
const ShapeNode = ({ data, selected }: { data: SporeBlock & { onDelete: (id: string) => void }, selected: boolean }) => {
    const isCircle = data.shape === 'circle';
    return (
        <>
            <NodeResizer
                isVisible={selected}
                minWidth={100}
                minHeight={100}
                onResize={(_evt, params) => {
                    sovereignStore.updateBlock(data.id, { width: params.width, height: params.height });
                }}
                handleClassName="!bg-slate-400 !w-2 !h-2 !rounded-full !border-2 !border-white"
            />
            <div
                className={`w-full h-full border-4 border-dashed border-slate-300 flex items-center justify-center relative group opacity-50 hover:opacity-100 transition-opacity ${isCircle ? 'rounded-full' : 'rounded-[40px]'}`}
                style={{ backgroundColor: data.color || 'rgba(203, 213, 225, 0.1)' }}
            >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-200 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    {data.content || "KNOWLEDGE ZONE"}
                </div>
                <button
                    onClick={() => data.onDelete(data.id)}
                    className={`absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 transition-all font-black text-sm ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                    ✕
                </button>
                <Handle type="target" position={Position.Left} className="!bg-slate-400 !w-4 !h-4 !border-2 !border-white" />
                <Handle type="source" position={Position.Right} className="!bg-slate-400 !w-4 !h-4 !border-2 !border-white" />
            </div>
        </>
    );
};

const nodeTypes = {
    spore: SporeNode,
    sticky: StickyNode,
    shape: ShapeNode,
};

const COLORS = [
    { name: 'White', value: '#ffffff' },
    { name: 'Teal', value: '#f0fdfa' },
    { name: 'Yellow', value: '#fef9c3' },
    { name: 'Rose', value: '#fff1f2' },
    { name: 'Orange', value: '#ffedd5' },
    { name: 'Purple', value: '#f3e8ff' },
    { name: 'Obsidian', value: '#0f172a' },
    { name: 'Midnight', value: '#1e1b4b' },
    { name: 'Emerald', value: '#064e3b' },
    { name: 'Crimson', value: '#450a0a' },
];

export default function EdgelessGarden() {
    return (
        <ReactFlowProvider>
            <GardenContent />
        </ReactFlowProvider>
    );
}

function GardenContent() {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    const [activeEditId, setActiveEditId] = useState<string | null>(null);
    const [activeSpawnId, setActiveSpawnId] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
    const [isThesisOpen, setIsThesisOpen] = useState(false);
    const [highlightedIds, setHighlightedIds] = useState<Set<string>>(new Set());
    const [peerCount, setPeerCount] = useState(0);

    useEffect(() => {
        const awareness = sovereignStore.getAwareness();

        const updatePeers = () => {
            // Self is included in states, so size - 1 is the number of *other* peers
            const count = awareness.getStates().size - 1;
            setPeerCount(Math.max(0, count));
        };

        awareness.on('change', updatePeers);
        updatePeers();

        return () => {
            awareness.off('change', updatePeers);
        };
    }, []);

    useOnSelectionChange({
        onChange: ({ nodes: selectedNodes }) => {
            if (selectedNodes.length === 0) {
                setHighlightedIds(new Set());
                return;
            }

            const activeNode = selectedNodes[0];
            const activeData = activeNode.data as unknown as SporeBlock;
            const allBlocks = sovereignStore.getAllBlocks();

            const related = allBlocks.filter(b => {
                if (b.id === activeData.id) return false;
                // Match tags
                const hasMatchingTag = b.tags.some(t => activeData.tags.includes(t));
                // Case-insensitive content overlap (simple heuristic)
                const contentWords = activeData.content.toLowerCase().split(/\s+/).filter(w => w.length > 4);
                const hasMatchingWord = contentWords.some(w => b.content.toLowerCase().includes(w));

                return hasMatchingTag || hasMatchingWord;
            });

            setHighlightedIds(new Set(related.map(r => r.id)));
        },
    });

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        const dataStr = event.dataTransfer.getData('application/reactflow');
        if (!dataStr) return;

        const item = JSON.parse(dataStr);
        const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect();
        if (!reactFlowBounds) return;

        const position = {
            x: event.clientX - reactFlowBounds.left - 100,
            y: event.clientY - reactFlowBounds.top - 100
        };

        sovereignStore.capture({
            content: item.content,
            type: item.type,
            nodeType: 'spore',
            platform: item.platform,
            tags: ['#Harvest', item.source],
            x: position.x,
            y: position.y
        });
    }, []);

    const handleSpawnFrom = (id: string) => {
        setActiveSpawnId(id);
        setInputValue('');
        setSelectedColor(undefined);
    };

    const handleEdit = (id: string, content: string) => {
        const block = sovereignStore.getAllBlocks().find(b => b.id === id);
        setActiveEditId(id);
        setInputValue(content);
        setSelectedColor(block?.color);
    };

    const confirmAction = async () => {
        if (!inputValue.trim()) {
            setActiveEditId(null);
            setActiveSpawnId(null);
            return;
        }

        if (activeEditId) {
            sovereignStore.updateBlock(activeEditId, { content: inputValue, color: selectedColor });
        } else if (activeSpawnId) {
            const parent = sovereignStore.getAllBlocks().find(b => b.id === activeSpawnId);
            await sovereignStore.capture({
                content: inputValue,
                parentId: activeSpawnId,
                color: selectedColor,
                x: (parent?.x || 0) + 350,
                y: (parent?.y || 0) + Math.random() * 200 - 100
            });
        }

        setActiveEditId(null);
        setActiveSpawnId(null);
        setInputValue('');
    };

    useEffect(() => {
        const unsub = sovereignStore.subscribe((blocks: SporeBlock[]) => {
            const flowNodes: Node[] = blocks.map(b => ({
                id: b.id,
                type: b.nodeType || 'spore',
                position: { x: b.x, y: b.y },
                width: b.width,
                height: b.height,
                style: { width: b.width, height: b.height },
                data: {
                    ...b,
                    highlighted: highlightedIds.has(b.id),
                    onSpawn: handleSpawnFrom,
                    onEdit: handleEdit,
                    onDelete: (id: string) => sovereignStore.deleteBlock(id)
                },
            }));

            const flowEdges: Edge[] = blocks
                .filter(b => b.parentId)
                .map(b => ({
                    id: `e-${b.parentId}-${b.id}`,
                    source: b.parentId!,
                    target: b.id,
                    animated: true,
                    style: { stroke: '#14b8a6', strokeWidth: 3 },
                    markerEnd: { type: MarkerType.ArrowClosed, color: '#14b8a6' },
                }));

            setNodes(flowNodes);
            setEdges(flowEdges);
        });

        return () => unsub();
    }, [setNodes, setEdges]);

    const onConnect = useCallback((params: any) => {
        setEdges((eds) => addEdge(params, eds));
        sovereignStore.updateBlock(params.target, { parentId: params.source });
    }, [setEdges]);

    const onNodeDragStop = useCallback((_event: any, node: Node) => {
        sovereignStore.updateBlock(node.id, { x: node.position.x, y: node.position.y });
    }, []);

    const spawnTool = async (type: 'spore' | 'sticky' | 'shape', content: string) => {
        await sovereignStore.capture({
            nodeType: type,
            content: content,
            shape: type === 'shape' ? 'rectangle' : undefined,
            tags: ['#Spatial'],
            x: Math.random() * 500,
            y: Math.random() * 500
        });
    };

    return (
        <div className="w-full h-full bg-slate-50 relative overflow-hidden">
            <HarvestPanel />

            <AnimatePresence>
                {(activeEditId || activeSpawnId) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
                        onClick={() => { setActiveEditId(null); setActiveSpawnId(null); }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-black text-slate-800 mb-2">
                                {activeEditId ? "Terraform Spore" : "Spawn Connected Growth"}
                            </h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                                {activeEditId ? "Update the mycelial content" : "What grows from this connection?"}
                            </p>
                            <textarea
                                autoFocus
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                placeholder="Enter wisdom here..."
                                className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none transition-all mb-6 text-slate-700 font-medium"
                            />

                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Color Substrate</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {COLORS.map(c => (
                                    <button
                                        key={c.value}
                                        onClick={() => setSelectedColor(c.value)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === c.value ? 'border-teal-500 scale-110 shadow-lg' : 'border-slate-100 hover:scale-105'}`}
                                        style={{ backgroundColor: c.value }}
                                        title={c.name}
                                    />
                                ))}
                                <button onClick={() => setSelectedColor(undefined)} className={`w-8 h-8 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400 ${!selectedColor ? 'border-teal-500 scale-110' : ''}`} title="Default">✕</button>
                            </div>

                            <div className="flex gap-4">
                                <button onClick={() => { setActiveEditId(null); setActiveSpawnId(null); }} className="flex-1 py-4 text-sm font-black text-slate-400 hover:text-slate-600 transition-colors">CANCEL</button>
                                <button onClick={confirmAction} className="flex-[2] py-4 bg-teal-600 text-white rounded-2xl font-black shadow-lg shadow-teal-900/20 hover:bg-teal-500 transition-all hover:-translate-y-1">
                                    {activeEditId ? "SAVE CHANGES" : "SPAWN"}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeDragStop={onNodeDragStop}
                onDrop={onDrop}
                onDragOver={onDragOver}
                selectionOnDrag={true}
                panOnDrag={[1, 2]}
                selectionMode={SelectionMode.Partial}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.05}
                maxZoom={100}
            >
                <Background color="#cbd5e1" gap={30} size={1} />
                <Controls className="!bg-white !border-slate-100 !shadow-xl !rounded-2xl" />

                <Panel position="top-left" className="p-4">
                    <div className="bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-white shadow-2xl flex items-center gap-4">
                        <img src="/spore_logo_v3.png" alt="Logo" className="w-8 h-8" />
                        <div>
                            <h2 className="text-sm font-black text-slate-800 leading-none">EDGELESS GARDEN</h2>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Sovereign Substrate v1.0</p>
                                {peerCount > 0 && (
                                    <div className="flex items-center gap-1 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                                        <span className="text-[9px] font-bold text-teal-600 uppercase tracking-tight">{peerCount} PEER{peerCount !== 1 ? 'S' : ''}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Panel>

                <Panel position="bottom-center" className="mb-6 flex gap-3">
                    <div className="bg-white/80 backdrop-blur-xl p-2 rounded-full border border-white shadow-2xl flex gap-2">
                        <button onClick={() => { setActiveSpawnId('root'); setInputValue(''); }} className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-500 transition-all" title="Spawn Spore Card">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </button>
                        <button onClick={() => spawnTool('sticky', 'Insight...')} className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-all" title="Spawn Sticky Note">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </button>
                        <div className="w-px h-8 bg-slate-200 self-center mx-1" />
                        <button
                            onClick={() => setIsThesisOpen(true)}
                            disabled={nodes.filter(n => n.selected).length < 2}
                            className="w-24 h-12 bg-indigo-900 text-white rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-slate-800 transition-all disabled:opacity-30 disabled:grayscale"
                            title="Synthesize Selected Spores"
                        >
                            <span className="text-xs font-black tracking-widest">THESIS</span>
                        </button>
                    </div>
                </Panel>
            </ReactFlow>

            <ThesisBuilder
                isOpen={isThesisOpen}
                onClose={() => setIsThesisOpen(false)}
                selectedSpores={nodes.filter(n => n.selected).map(n => ({ id: n.id, content: (n.data as any).content, tags: (n.data as any).tags }))}
            />

            <style jsx global>{`
                .react-flow__handle {
                    opacity: 0.5;
                    background: #14b8a6;
                    width: 8px;
                    height: 8px;
                }
                .react-flow__node-spore.selected .rounded-3xl {
                    ring: 4px;
                    ring-color: #14b8a6;
                    border-color: #14b8a6;
                }
            `}</style>
        </div>
    );
}
