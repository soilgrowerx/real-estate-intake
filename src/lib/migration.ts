import { sporeStore } from './spore-store';
import { sovereignStore, SporeBlock } from './sovereign-store';

/**
 * Migration utility to move Spores from the legacy legacy IndexedDB 
 * to the new Yjs-backed SovereignStore.
 */
export async function migrateToSovereign() {
    console.log('[MIGRATION] Checking for legacy spores...');

    try {
        const legacySpores = await sporeStore.getAll();

        if (legacySpores.length === 0) {
            console.log('[MIGRATION] No legacy spores found. Clear soil.');
            return;
        }

        console.log(`[MIGRATION] Found ${legacySpores.length} legacy spores. Relocating to Sovereign Garden...`);

        for (const s of legacySpores) {
            // Check if already in sovereign (idempotency)
            const currentBlocks = sovereignStore.getAllBlocks();
            if (currentBlocks.some(b => b.id === s.id)) continue;

            const block: Partial<SporeBlock> = {
                id: s.id,
                content: s.content,
                type: s.type,
                tags: s.tags,
                createdAt: s.createdAt,
                synced: s.synced,
                x: s.x ?? (Math.random() * 800),
                y: s.y ?? (Math.random() * 600),
                parentId: s.parentId
            };

            await sovereignStore.capture(block);
        }

        console.log('[MIGRATION] Migration complete. The Garden has evolved.');

        // Note: We keep legacy data for now as a fallback but we could optionally purge it.
    } catch (e) {
        console.error('[MIGRATION] Failure during relocation:', e);
    }
}
