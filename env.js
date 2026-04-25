# 🧠 InterviewIQ

> AI-Powered Interview Emotion Analysis Platform — Hackathon Project

InterviewIQ uses AI to analyse facial and vocal emotions during mock interviews, giving candidates real-time feedback to sharpen their interview skills.

## ✨ Features

- 🎥 **Video Interview** — Real-time facial emotion detection (Anger, Happiness, Fear, Sadness, Surprise, Disgust)
- 🎙️ **Audio Interview** — Vocal tone and speech pattern analysis
- 📊 **Results Dashboard** — Compare your emotional profile against other candidates

## 🚀 Deploy to Vercel

### One-click (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. If this app is inside a parent folder (like this repository), Vercel uses `vercel.json` to build from `InterviewIQ (1)` automatically.
4. Deploy ✅

### Notes
- This project uses an older dependency (`react-mic`) with strict peer dependency constraints.
- Vercel is configured to install with `npm install --legacy-peer-deps` to avoid install failures.

### CLI
```bash
npm install -g vercel
vercel
```

## 🛠️ Local Development

```bash
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
```

## 🗂️ Project Structure

```
src/
├── pages/
│   ├── landing.pages.jsx     # Home page
│   ├── video.jsx             # Video interview intro
│   ├── audio.jsx             # Audio interview intro
│   ├── videoInterview.jsx    # Video recording session
│   └── audioInterview.jsx    # Audio recording session
├── components/
│   ├── newnavbar.jsx         # Landing navbar
│   ├── navbar.component.jsx  # Inner pages navbar
│   └── footer.component.jsx  # Footer
└── assets/
    └── images/               # SVG illustrations
```

## 🏆 Built for Hackathon 2024
