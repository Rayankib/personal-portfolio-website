# Rayan Fikri — Portfolio

A static portfolio of frontend development, UX/UI and client work, prepared for internship applications. It presents individual contributions alongside team context and distinguishes prototypes from deployed projects.

## Featured projects

1. **CZ Zorgvinder** — five-person UX/UI client project; research, interface design and prototyping presented at CZ headquarters in Tilburg.
2. **Linked** — in-development Studio Krom team project; selected frontend user stories, volunteer flows and optional location sharing.
3. **Digital Paradise** — client artist website and promotional video.
4. **OV09 Album Trailer** — team client production; production, acting and editing.
5. **FitPlanner** — supporting interactive frontend project.
6. **Skraw.io** — collaborative drawing-and-guessing game; early frontend contribution and a separate canvas demo.

## Technologies

- HTML, CSS and JavaScript
- Native browser APIs, including Canvas, video, dialogs and local storage
- Static hosting with GitHub Pages; no build step or runtime dependencies

## Run locally

From the repository root, start a static HTTP server:

```powershell
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). Serving over HTTP supports native video playback and browser features used by the case studies.

## Live portfolio

[https://rayankib.github.io/personal-portfolio-website/](https://rayankib.github.io/personal-portfolio-website/)

GitHub Pages is configured for this repository path on the `main` branch.

## Contact

- Email: [r.fikri@student.fontys.nl](mailto:r.fikri@student.fontys.nl)
- GitHub: [Rayankib](https://github.com/Rayankib)
- LinkedIn: [Rayan Fikri](https://www.linkedin.com/in/rayan-fikri-6a5489331/)

## Project structure

- `index.html`: portfolio homepage and project overview
- `cz.html`, `linked.html`, `digital-paradise.html`, `ov09.html`, `skraw.html`: case studies
- `css/`: homepage, shared case-study and project-specific styles
- `js/`: homepage interactions, case-study controls and the standalone Skraw demo
- `assets/projects/`: project screenshots, illustrations, stills and video
- `assets/social/portfolio-og.png`: Open Graph preview image
- `assets/favicon.svg`, `assets/favicon-32.png`: RF favicons
- `docs/design-decisions.md`: selected design and implementation history

Linked and Skraw.io are team projects; their pages describe my contributions without claiming sole authorship. Prototype work is not presented as a deployed client service.
