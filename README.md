# Frontend - React + Vite

This repository is a minimal React + Vite frontend scaffold used for the assessment. It includes Tailwind CSS and a small component set for a knowledge-base UI.

## Quick start

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Project structure (important files)

- `src/main.jsx` — app entry
- `src/App.jsx` — main layout and state (`searchTerm`, `sidebarOpen`, modal state)
- `src/components/Header.jsx` — top navigation, search, profile
- `src/components/Sidebar.jsx` — left navigation
- `src/components/KnowledgeBaseGrid.jsx` — grid layout
- `src/components/KnowledgeBaseCard.jsx` — individual card UI
- `public/` — static assets (place `screenshot.png` here)

## Preview

Add screenshot images in the `public/` folder and they will be embedded below in the rendered README:

![App preview 1](public/Screenshot%202026-04-02%20204904.png)
![App preview 2](public/Screenshot%202026-04-02%20204948.png)

If the preview does not display on your local file viewer, ensure:

- The file exists at `public/screenshot.png` (project root `public` folder).
- On GitHub, the image will render after you commit and push the file to the repository.

## Notes

- For visual QA, run the dev server and open the app in desktop and mobile emulation to confirm the responsive header, sidebar, and search behavior.
- If you'd like a smaller thumbnail or a different path (e.g., `docs/screenshot.png`), tell me and I'll update the README accordingly.
