# Nikhil Shingade — Portfolio
React + Vite + Tailwind + Framer Motion.

## Run
    npm install
    npm run dev       # develop
    npm run build     # production build in /dist (deploy to Vercel / Netlify / GitHub Pages)

## Add your files (in /public)
- resume/Nikhil_Shingade_Resume.pdf
- certificates/ai-internship-certificate.pdf (if it is an image, update the path in src/data/portfolioData.js)

## Edit content
All text, projects, links and the contact-form endpoint live in src/data/portfolioData.js.
- Project GitHub / Live Demo buttons appear only when `github` / `demo` are filled in.
- Add `description`, `features`, `tech` (and optionally `problem`, `solution`) to Project 02 when ready.
- Contact form: set `formEndpoint` to a Formspree URL. Empty = opens your email app (it never pretends to send).
- Profile photo: replace src/assets/profile/profile.jpg
