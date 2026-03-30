# Web Scraper Debugger & Refiner

> **Use Case:** To analyze and debug a failing web scraping script (e.g., using Crawlee with Playwright or Cheerio), identify common issues like timeouts, memory overloads, or selector failures, and generate a robust, optimized, and production-ready script.

```markdown
# [PROMPT-ROLE: Expert Web Scraping Engineer & Debugger]

Your task is to analyze the provided web scraping script, target URL(s), and error logs. Your goal is to produce a rock-solid, optimized, and fully functional script that successfully extracts the required data. You must diagnose the root causes of the errors and implement best practices to prevent them.

## CONTEXT & SCRIPT ANALYSIS

**1. User's Goal:**
The user wants to scrape all [DATA TO BE SCRAPED, e.g., real estate agent profiles] from the target website, [TARGET WEBSITE, e.g., sothebysrealty.com]. The initial data source is a list of [STARTING DATA, e.g., names from a CSV file] and/or a set of start URLs.

**2. Provided Script:**
```javascript
[PASTE FAILING/EXISTING SCRIPT HERE]
```

**3. Error Logs & Observed Issues:**
```text
[PASTE FULL ERROR LOGS HERE]
```

**4. Key Problems Identified from Logs:**
*   **Timeout Errors:** Frequent `page.waitForSelector: Timeout [...]ms exceeded` errors indicate that the target selectors (`[SELECTOR]`) are not appearing in time. This could be due to A) the site being slow, B) the site using client-side rendering (CSR), C) anti-scraping measures, or D) incorrect selectors.
*   **Memory Overloads:** Warnings like `Memory is critically overloaded. Using 488 MB of 512 MB (95%)` suggest that the crawler is not managing browser contexts or memory efficiently. This is common with headless browsers in constrained environments.
*   **Navigation / Page Crash Errors:** Errors like `Page crashed` or `net::ERR_CONNECTION_CLOSED` point to resource-intensive pages, network instability, or aggressive anti-bot technologies.
*   **Setup/Dependency Errors:** Errors like `Cannot find module 'playwright'` or `Executable doesn't exist` indicate a misconfigured environment or Dockerfile.

## REVISED & OPTIMIZED SCRIPT

Based on this analysis, here is the revised, robust script. I have implemented several key improvements:

*   **Strategic Crawler Choice:** Switched to `PlaywrightCrawler` to handle the heavy client-side JavaScript rendering on the target site.
*   **Robust Error Handling:** Implemented `try...catch` blocks within the request handler and a dedicated `failedRequestHandler` to gracefully manage and log errors without crashing the crawl.
*   **Smarter Selectors & Waits:** Used more resilient selectors and implemented `page.waitForLoadState('networkidle')` to ensure the page is fully loaded before attempting extraction.
*   **Memory Management:** Implemented browser recycling and reduced concurrency to prevent memory overload in resource-constrained environments.
*   **Anti-Scraping Evasion:** Integrated realistic headers, viewport settings, and intelligent request blocking (e.g., for fonts, images, tracking scripts) to reduce payload and appear more human-like.
*   **Efficient Pagination Handling:** Correctly identified the pagination logic and will enqueue all pages before starting the deep crawl.

Here is the complete, runnable `main.js` file:

```javascript
// [GENERATE THE FULLY REVISED, ROBUST, AND ANNOTATED JAVASCRIPT CODE HERE]
// Example Snippet of Improvement:

// OLD (brittle):
// await page.waitForSelector('.agent-card');

// NEW (robust):
// try {
//   await page.waitForLoadState('networkidle', { timeout: 60000 });
//   const agentCardSelector = '.agent-card, .associate-box'; // Using multiple potential selectors
//   await page.waitForSelector(agentCardSelector, { timeout: 30000 });
// } catch (e) {
//   log.error(`Selectors not found on ${request.url}`);
//   // Add logic to save screenshots on error for debugging
//   await Actor.setValue(`ERROR_${request.id}`, await page.screenshot(), { contentType: 'image/png' });
//   throw new Error('Required selectors not loaded in time.');
// }
```

## LOCAL EXECUTION & DEPLOYMENT PLAN

To run this script locally on your Linux machine, follow these steps:

1.  **Install Node.js:** Ensure you have Node.js (v18+) installed.
2.  **Initialize Project:**
    ```bash
    mkdir sotheby-scraper && cd sotheby-scraper
    npm init -y
    npm install apify crawlee playwright
    ```
3.  **Install Browser Dependencies:** This is critical.
    ```bash
    npx playwright install --with-deps
    ```
4.  **Save the Code:** Save the revised code above as `main.js`.
5.  **Run the Scraper:**
    ```bash
    node main.js
    ```
The results will be saved in the `./storage/datasets/default/` directory as JSON files.
```