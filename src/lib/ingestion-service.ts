import { sporeStore } from './spore-store';

/**
 * IngestionProtocol: A standardized schema for external apps to send data.
 */
export interface ExternalSpore {
    source: 'google-keep' | 'slack' | 'whatsapp' | 'email' | 'journal' | string;
    type: 'voice' | 'text' | 'file';
    content: string;
    tags?: string[];
    sourceUrl?: string;
    audioUrl?: string; // For voice notes from external sources
}

class IngestionService {
    async ingest(data: ExternalSpore) {
        console.log(`[Ingestion] Receiving harvest from ${data.source}...`);

        let blob: Blob | undefined;
        if (data.audioUrl) {
            // Mock fetching the audio blob
            // In a real scenario, the extension might pass the blob directly
        }

        return await sporeStore.capture(
            data.content,
            data.type,
            data.tags || ['Harvested'],
            blob,
            data.source,
            data.sourceUrl
        );
    }

    /**
     * Drains the server-side silo and pulls data into the local Garden.
     */
    async scavenge() {
        const API_TOKEN = 'GARDEN_HARVEST_TOKEN_2026';

        try {
            const response = await fetch('/api/ingest', {
                headers: { 'X-Garden-Token': API_TOKEN }
            });

            if (response.ok) {
                const incoming = await response.json();
                if (incoming.length > 0) {
                    console.log(`[Scavenger] Found ${incoming.length} new spores in the silo!`);
                    for (const s of incoming) {
                        await this.ingest({
                            source: s.source,
                            type: s.type,
                            content: s.content,
                            tags: [...(s.tags || []), 'Silo'],
                            sourceUrl: s.sourceUrl
                        });
                    }
                }
            }
        } catch (e) {
            // Silently fail if server is down or unreachable
        }
    }

    /**
     * Starts the periodic background scavenging.
     */
    startScavenging(intervalMs = 30000) {
        // Initial scavenge
        this.scavenge();
        // Set up heartbeat
        setInterval(() => this.scavenge(), intervalMs);
    }

    /**
     * Mock function to simulate an incoming flow of diverse data.
     * Perfect for testing the Harvest Panel UI.
     */
    async seedMockHarvest() {
        const mocks: ExternalSpore[] = [
            {
                source: 'slack',
                type: 'text',
                content: "Reminder: The mycelium project needs more humidity sensors. Check the vendor list.",
                tags: ['Projects', 'Slack'],
                sourceUrl: 'https://slack.com/archives/C12345/p123456789'
            },
            {
                source: 'whatsapp-voice',
                type: 'voice',
                content: "Transcription: Just had a breakthrough about the soil composition. It needs more nitrogen-fixing bacteria near the roots.",
                tags: ['Idea', 'Voice'],
                sourceUrl: 'https://whatsapp.com/audio/98765'
            },
            {
                source: 'email',
                type: 'text',
                content: "FW: Seed Order Confirmation. 500 units of Red Clover arriving Tuesday.",
                tags: ['Resource', 'Email'],
                sourceUrl: 'https://gmail.com/mail/u/0/#inbox/123'
            },
            {
                source: 'google-keep',
                type: 'text',
                content: "Don't forget to mulch the northwest sector before the frost.",
                tags: ['Task', 'Keep'],
                sourceUrl: 'https://keep.google.com/u/0/#NOTE/123'
            }
        ];

        for (const m of mocks) {
            await this.ingest(m);
        }
    }
}

export const ingestionService = new IngestionService();
