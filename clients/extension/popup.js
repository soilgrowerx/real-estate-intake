document.addEventListener('DOMContentLoaded', async () => {
    const contentEl = document.getElementById('content');
    const urlEl = document.getElementById('url');
    const btn = document.getElementById('harvestBtn');
    const statusEl = document.getElementById('status');

    const settingsToggle = document.getElementById('settingsToggle');
    const settingsDiv = document.getElementById('settings');
    const serverUrlEl = document.getElementById('serverUrl');
    const apiTokenEl = document.getElementById('apiToken');
    const saveSettingsBtn = document.getElementById('saveSettings');

    // Load settings
    const { serverUrl, apiToken } = await chrome.storage.sync.get(['serverUrl', 'apiToken']);
    if (serverUrl) serverUrlEl.value = serverUrl;
    if (apiToken) apiTokenEl.value = apiToken;

    // Defaults
    if (!serverUrl) {
        serverUrlEl.value = 'https://spore.arboracle.app/api/ingest';
    }

    // Get current tab info
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    urlEl.value = tab.url;

    // Try to get selection
    try {
        const [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => window.getSelection().toString()
        });

        if (result) {
            contentEl.value = result;
        } else {
            contentEl.value = tab.title; // Fallback to title
        }
    } catch (e) {
        contentEl.value = tab.title;
    }

    // Toggle settings
    settingsToggle.addEventListener('click', () => {
        settingsDiv.classList.toggle('open');
    });

    // Save settings
    saveSettingsBtn.addEventListener('click', () => {
        chrome.storage.sync.set({
            serverUrl: serverUrlEl.value,
            apiToken: apiTokenEl.value
        }, () => {
            statusEl.textContent = 'Settings saved!';
            statusEl.className = 'status success';
            setTimeout(() => statusEl.textContent = '', 2000);
        });
    });

    // Harvest
    btn.addEventListener('click', async () => {
        const content = contentEl.value;
        const url = urlEl.value;
        const target = serverUrlEl.value;
        const token = apiTokenEl.value;

        if (!target || !token) {
            statusEl.textContent = 'Please configure Server URL and Token below.';
            statusEl.className = 'status error';
            settingsDiv.classList.add('open');
            return;
        }

        btn.disabled = true;
        btn.textContent = 'SENDING...';

        try {
            const res = await fetch(target, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Garden-Token': token
                },
                body: JSON.stringify({
                    source: 'web-clipper',
                    type: 'text',
                    content: content,
                    sourceUrl: url,
                    tags: ['#Web', '#Harvest']
                })
            });

            if (res.ok) {
                statusEl.textContent = 'Spore Harvested Successfully!';
                statusEl.className = 'status success';
                btn.textContent = 'HARVESTED';
                setTimeout(() => window.close(), 1500);
            } else {
                throw new Error('Server error');
            }
        } catch (e) {
            statusEl.textContent = 'Failed to send. Check settings/console.';
            statusEl.className = 'status error';
            btn.disabled = false;
            btn.textContent = 'HARVEST SPORE';
        }
    });
});
