import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';

/**
 * SovereignStore: The CRDT-backed data layer for the Edgeless Garden.
 * Inspired by AFFiNE's BlockSuite, it handles local-first persistence
 * and spatial block metadata.
 */

export interface SporeBlock {
    id: string;
    content: string;
    type: 'voice' | 'text' | 'file';
    nodeType: 'spore' | 'sticky' | 'shape';
    tags: string[];
    createdAt: number;
    synced: boolean;
    // Spatial & Aesthetic metadata
    x: number;
    y: number;
    width?: number;
    height?: number;
    color?: string;
    shape?: 'circle' | 'rectangle';
    parentId?: string;
    platform?: string;
    highlighted?: boolean;
}

class SovereignStore {
    public doc: Y.Doc;
    private persistence: IndexeddbPersistence;
    private sporesMap: Y.Map<any>;

    constructor() {
        this.doc = new Y.Doc();
        this.persistence = new IndexeddbPersistence('sovereign-garden-db', this.doc);
        this.sporesMap = this.doc.getMap('spores');

        this.persistence.on('synced', () => {
            console.log('[SOVEREIGN] Garden synced with local substrate.');
        });
    }

    /**
     * Captures a spore into the CRDT map.
     */
    async capture(spore: Partial<SporeBlock>): Promise<string> {
        const id = spore.id || crypto.randomUUID();
        const fullSpore: SporeBlock = {
            id,
            content: spore.content || '',
            type: spore.type || 'text',
            nodeType: spore.nodeType || 'spore',
            tags: spore.tags || [],
            createdAt: spore.createdAt || Date.now(),
            synced: spore.synced || false,
            x: spore.x ?? Math.random() * 500,
            y: spore.y ?? Math.random() * 500,
            width: spore.width || (spore.nodeType === 'sticky' ? 200 : 250),
            height: spore.height || (spore.nodeType === 'sticky' ? 200 : 120),
            color: spore.color,
            shape: spore.shape,
            parentId: spore.parentId,
            platform: spore.platform
        };

        this.doc.transact(() => {
            this.sporesMap.set(id, fullSpore);
        });

        return id;
    }

    /**
     * Updates a block's content or spatial metadata.
     */
    updateBlock(id: string, updates: Partial<SporeBlock>) {
        const existing = this.sporesMap.get(id);
        if (existing) {
            this.doc.transact(() => {
                this.sporesMap.set(id, { ...existing, ...updates });
            });
        }
    }

    /**
     * Retrieves all blocks as an array.
     */
    getAllBlocks(): SporeBlock[] {
        return Array.from(this.sporesMap.values()) as SporeBlock[];
    }

    /**
     * Observes changes to the garden.
     */
    subscribe(callback: (blocks: SporeBlock[]) => void) {
        const observer = () => {
            callback(this.getAllBlocks());
        };
        this.sporesMap.observe(observer);
        // Initial call
        callback(this.getAllBlocks());

        return () => this.sporesMap.unobserve(observer);
    }

    /**
     * Deletes a block.
     */
    deleteBlock(id: string) {
        this.doc.transact(() => {
            this.sporesMap.delete(id);
        });
    }
}

export const sovereignStore = new SovereignStore();
