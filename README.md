# Real Estate Client Intake Form

This is a modern, AI-powered intake form for real estate agents, built with React, TypeScript, and the Gemini API. It allows for efficient client data capture through both manual input and voice transcription.

## Deployment to GitHub Pages

Follow these steps to deploy your application for free using GitHub Pages.

### Step 1: Push to GitHub

Create a new repository on GitHub (do not initialize with a README) and push this project's code to it.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/soilgrowerx/real-estate-intake.git
git push -u origin main
```

### Step 2: Configure Project for Deployment

You need to tell the application where it will be hosted.

1.  **`package.json`**:
    -   Open the `package.json` file.
    -   Find the `"homepage"` line.
    -   Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username.
    -   Example: `"homepage": "https://john-doe.github.io/real-estate-intake",`

2.  **`vite.config.ts`**:
    -   Open the `vite.config.ts` file.
    -   Confirm the `base` property is set to `'/real-estate-intake/'`.

Commit and push these changes:
```bash
git add .
git commit -m "Configure for deployment"
git push
```

### Step 3: Install Dependencies & Deploy

In your local project terminal, run the following commands.

1.  **Install dependencies:** This installs React, Vite, and the `gh-pages` deployment tool.
    ```bash
    npm install
    ```

2.  **Deploy:** This command will build your application and push the final files to a special `gh-pages` branch on your repository.
    ```bash
    npm run deploy
    ```

### Step 4: Configure GitHub Repository Settings

1.  Go to your repository on GitHub.
2.  Click on the **"Settings"** tab.
3.  In the left sidebar, click on **"Pages"**.
4.  Under "Build and deployment", for the "Source", select **"Deploy from a branch"**.
5.  Set the branch to **`gh-pages`** and the folder to **`/ (root)`**.
6.  Click **"Save"**.

After a minute or two, your site will be live at the URL you specified in the `homepage` field of your `package.json`!