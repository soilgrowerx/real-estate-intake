import { openDB, DBSchema, IDBPDatabase } from 'idb';

/**
 * Spore: The Atomic Unit of the Neocambrian Garden.
 * It is a raw thought, a voice note, or a text snippet captured in the wild.
 */
export interface Spore {
    id: string; // UUID
    content: string; // Transcription, Text, or Filename
    type: 'voice' | 'text' | 'file';
    tags: string[]; // ["Projects", "People", "Ideas", "Resources", etc.]
    createdAt: number; // Timestamp
    synced: boolean; // Has it been sent to the Master Docs?
    blob?: Blob; // Optional audio blob for voice notes
    platform?: 'google-keep' | 'slack' | 'whatsapp' | 'whatsapp-voice' | 'email' | 'journal' | 'voice-capture' | string;
    sourceUrl?: string;
    // Spatial metadata for "Edgeless Mode"
    x?: number;
    y?: number;
    parentId?: string;
}

interface SporeDB extends DBSchema {
    spores: {
        key: string;
        value: Spore;
        indexes: { 'by-date': number; 'by-synced': string };
    };
}

const DB_NAME = 'neocambrian-spore-db';
const STORE_NAME = 'spores';

class SporeStore {
    private dbPromise: Promise<IDBPDatabase<SporeDB>>;
    private listeners: (() => void)[] = [];

    constructor() {
        if (typeof window === 'undefined') {
            this.dbPromise = Promise.resolve() as any; // Server-side fallback (noop)
            return;
        }

        this.dbPromise = openDB<SporeDB>(DB_NAME, 1, {
            upgrade(db) {
                const store = db.createObjectStore(STORE_NAME, {
                    keyPath: 'id',
                });
                store.createIndex('by-date', 'createdAt');
                store.createIndex('by-synced', 'synced'); // For syncing worker
            },
        });
    }

    /**
     * Captures a new Spore into the local substrate.
     * This is Sync-Agnostic. It just saves it.
     */
    async capture(
        content: string,
        type: 'voice' | 'text' | 'file',
        tags: string[] = [],
        blob?: Blob,
        platform?: string,
        sourceUrl?: string
    ): Promise<string> {
        const id = crypto.randomUUID();
        const spore: Spore = {
            id,
            content,
            type,
            tags,
            createdAt: Date.now(),
            synced: false, // Default to unsynced
            blob,
            platform,
            sourceUrl,
        };

        const db = await this.dbPromise;
        await db.put(STORE_NAME, spore);
        this.notify();
        return id;
    }

    private notify() {
        this.listeners.forEach(l => l());
    }

    subscribe(listener: () => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    /**
     * Retrieves all Spores, sorted by newest first.
     */
    async getAll(): Promise<Spore[]> {
        const db = await this.dbPromise;
        const spores = await db.getAllFromIndex(STORE_NAME, 'by-date');
        return spores.reverse();
    }

    /**
     * Retrieves only unsynced Spores for the Background Worker.
     */
    async getUnsynced(): Promise<Spore[]> {
        const db = await this.dbPromise;
        // TypeScript/IDB quirk with boolean indexes, sometimes string parsing is safer but idb handles bools well usually.
        // However, getAllFromIndex is robust.
        return db.getAllFromIndex(STORE_NAME, 'by-synced', false as any);
    }

    /**
     * Updates the content of a Spore (e.g. adding notes to a transcript).
     * This marks the spore as 'unsynced' again so changes propagate.
     */
    async updateContent(id: string, newContent: string) {
        const db = await this.dbPromise;
        const spore = await db.get(STORE_NAME, id);
        if (spore) {
            spore.content = newContent;
            spore.synced = false; // Re-queue for sync
            await db.put(STORE_NAME, spore);
        }
    }

    /**
     * Syncs a single spore to the cloud API.
     */
    async syncOne(id: string): Promise<boolean> {
        const db = await this.dbPromise;
        const spore = await db.get(STORE_NAME, id);

        if (!spore) return false;

        try {
            const response = await fetch('/api/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ spore })
            });

            const data = await response.json();

            if (data.success) {
                spore.synced = true;
                await db.put(STORE_NAME, spore);
                return true;
            }
            return false;
        } catch (e) {
            console.error('Sync error:', e);
            return false;
        }
    }

    /**
     * Marks a Spore as successfully synced to the Garden.
     */
    async markSynced(id: string) {
        const db = await this.dbPromise;
        const spore = await db.get(STORE_NAME, id);
        if (spore) {
            spore.synced = true;
            await db.put(STORE_NAME, spore);
        }
    }

    /**
     * Hard Delete (Eject)
     */
    async delete(id: string) {
        const db = await this.dbPromise;
        await db.delete(STORE_NAME, id);
        this.notify();
    }

    /**
     * THE EJECT BUTTON: Dumps everything for the user.
     */
    async exportAll(): Promise<string> {
        const all = await this.getAll();
        return JSON.stringify(all, null, 2);
    }
}

export const sporeStore = new SporeStore();
