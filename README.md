<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# WebEasily | Premium Digital Agency

WebEasily is a modern, high-performance digital agency website built with Vite, React, TypeScript, and Tailwind CSS. It features a premium design system with custom sections for services, portfolio, testimonials, why us, and a blog, along with a built-in AI assistant powered by Google Gemini.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/logixslayer/Webeasily)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/logixslayer/Webeasily)

## Features

- **Modern Design:** Dark mode, gradients, responsive grids, hover micro-animations, and clean typography.
- **Vite & React:** Fast hot module replacement (HMR) and optimized production bundle.
- **AI Assistant:** Powered by the Google Gemini API to answer client inquiries about services.
- **Fully Responsive:** Beautifully crafted layouts optimized for mobile, tablet, and desktop viewports.

---

## Run Locally

### Prerequisites

Make sure you have **Node.js** installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/logixslayer/Webeasily.git
   cd Webeasily
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create or edit the `.env.local` file in the root directory and add your Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(You can obtain a free API key from [Google AI Studio](https://aistudio.google.com/))*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3010/](http://localhost:3010/) in your browser to view the application.

---

## Deployment

This repository is pre-configured with `netlify.toml` and `vercel.json` for seamless deployment.

### ⚠️ Critical Step: Set your API Key

Since the AI Assistant relies on the Gemini API, you **must** configure the `GEMINI_API_KEY` environment variable on your hosting dashboard:

- **Variable Name:** `GEMINI_API_KEY`
- **Variable Value:** *[Your actual Google Gemini API key]*

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/) and connect your GitHub account.
2. Select the `Webeasily` repository.
3. Verify the build command is `npm run build` and publish directory is `dist` (configured automatically).
4. Go to **Environment Variables** and add `GEMINI_API_KEY`.
5. Click **Deploy site**.

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com/) and connect your GitHub account.
2. Select the `Webeasily` repository and click **Import**.
3. Expand **Environment Variables** and add `GEMINI_API_KEY`.
4. Click **Deploy**.
