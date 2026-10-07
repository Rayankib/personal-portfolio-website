# Design Decisions

## 29 September 2026 - Improving the hero for recruiter scanning

### Observation

The original hero introduced my name visually, but did not immediately explain my frontend direction or that I am looking for a Semester 5 internship.

### Research

Research from Nielsen Norman Group describes how users commonly scan web pages instead of reading every word and recommends concise and scannable presentation of important information. Related guidance on perceived value and page visits reinforces the value of making a page's purpose clear early. These sources inform the design decision, not a claim about recruiter outcomes.

For this portfolio, that means important information such as my role, internship availability and main route towards my work should be visible early.

Sources:

- https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- https://www.nngroup.com/articles/perceived-value/
- https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/

### Decision

I decided to improve the information hierarchy of the hero so visitors can immediately understand my ICT/frontend direction, internship availability and how to view my projects.

### Changes

- Added clear Semester 5 internship availability
- Clarified my ICT/frontend positioning
- Added concise supporting copy
- Strengthened the call to action towards my projects
- Preserved my name and visual identity as the main visual focus
- Reviewed the rest of the website for small consistency, accessibility and metadata improvements

### Validation

This iteration is based on research, but the result still needs to be validated through feedback and/or user testing.

## 4 October 2026 - First visual product preview

### Observation

The previous Selected Work section mainly showed text descriptions instead of visual examples of finished products. It also included a Personal Portfolio project, even though this website is already my showcase portfolio.

### Research and reasoning

Previous portfolio feedback recommended making finished projects more visible and using visual previews to help visitors recognize and understand the work. Since I use this website when applying for ICT/frontend internships, showing a real, working frontend product gives visitors more concrete evidence than a description alone. Removing the Personal Portfolio entry also makes room for more relevant and varied work.

### Decision

I decided to introduce FitPlanner as the first visual product preview and remove the redundant Personal Portfolio project from Selected Work.

### Implementation

- Added a genuine 1280 × 800 screenshot captured from the live FitPlanner application.
- Added a reusable visual project-card style with a screenshot, concise product description, technology labels, and a live-project link.
- Added a “Try Live Project” link to the working FitPlanner site. The HTML, CSS, and JavaScript labels reflect the project documentation.
- Kept OV09 and Toku Studios in Selected Work for future presentation improvements.
- Removed the Personal Portfolio entry and its detail page after confirming that the homepage entry was its only internal link.

### Validation

I confirmed that the live FitPlanner homepage loads, selecting a sport opens the training planner, and the planner displays sessions. I reviewed the portfolio card on desktop and at a 390-pixel mobile width, confirmed the image loads without horizontal overflow, and checked that keyboard navigation reaches the live-project link. Toku's back link returned to Selected Work; the OV09 page and its back-link target were verified, although the browser automation could not complete a click on that link. My own review and user feedback are still pending. I have not tested whether the new presentation improves recruiter engagement.

## 4 October 2026 - CZ Zorgvinder prototype explorer

### Observation

The earlier portfolio featured Toku Studios, which was less relevant to the frontend internship direction I want to communicate. The Projects section also needed more visual examples of actual project work.

### Decision

I replaced Toku Studios with CZ Zorgvinder, a UX/UI client project completed in collaboration with CZ and presented at its headquarters in Tilburg. The page describes a client project and prototype; it does not claim the redesign is live on CZ's website.

### Research and reasoning

Our project research described search difficulties involving misspellings and everyday terms, unclear or insufficiently relevant filters, limited provider details, a lack of side-by-side comparison, and poor mobile usability. The October 29 presentation reports feedback from four testers: they responded positively to the comparison concept, while filter visibility, waiting-time context and navigation clarity remained improvement areas. I present these as limited project-test findings, not a broader usability outcome.

My initial idea was an original-versus-redesign comparison. After reviewing the original project material, I could not establish a reliable screenshot of CZ's existing interface. I abandoned the before/after slider rather than risk presenting a student prototype as the original product. I chose an interactive four-stage explorer instead, using documented prototype screens for Search, Results, Provider and Compare.

### Development

- I updated the Selected Work HTML and added `cz.html` with a concise client-project narrative, research challenge, design decisions, contribution, and presentation/feedback sections.
- I used CSS to match the existing dark/yellow identity and adapt the cards, explorer, dialog, and content layout to different viewport sizes.
- I used JavaScript for four keyboard-operable prototype tabs and screenshot enlargement. The native dialog supports Escape, uses descriptive image text, and returns focus to the image button.
- I kept navigation and media references relative so the homepage and project page work as a static GitHub Pages site.
- I prepared six optimized local images from the project screenshots and retained masks over unverified provider-specific values. I moved the approved copies into `assets/projects/cz-zorgvinder/`; the original research files were not changed.
- I removed the temporary ignore rule after CZ and the team confirmed permission to showcase the prototype and branding. Permission does not verify provider sample data, which remains masked.
- I removed `toku.html` after confirming that the homepage card was its only internal reference.

### Validation

I verified View Projects and Contact Me, the FitPlanner URL, the CZ card and back link, and the OV09 link and return path. All six CZ images loaded with non-zero dimensions. I tested all four stages, arrow-key navigation, image enlargement, Escape close and focus restoration. At 1440×900 desktop, 1366×768 laptop, 768×1024 tablet and 390×844 mobile, the homepage and case page had no horizontal overflow. The browser reported no JavaScript errors, console errors or failed resource requests. I also checked that the public pages use local relative assets and that the approved CZ images are no longer ignored by Git. External user feedback remains a future validation step; I do not claim improved recruiter engagement or production results.

### Publication

Before I added the approved web-ready copies to the public site assets, I confirmed permission from CZ and my project group to showcase the prototype work and branding. Unverified provider information remains masked. No internal Portflow export was copied into the website repository.

## 7 October 2026 - OV09 Album Trailer showcase

### Observation

OV09 was only represented by a short text row even though I had a complete audiovisual final product.

### Decision

I decided to make the actual finished trailer the main focus of the project presentation.

### Reasoning

The portfolio is intended for internship recruiters. Showing the finished product provides more direct evidence of my editing, storytelling and media-production skills than only describing the project in text.

### Development

- I reviewed moments throughout the 2:16.94, 1920 × 1080, 29.97 fps H.264/AAC source, which is 220,037,649 bytes. I encoded a 46,542,283-byte 1080p H.264/AAC MP4, kept its 16:9 aspect ratio, enabled fast start for web playback, and kept the original master out of the public site.
- I selected a colourful studio-performance frame at 86.4 seconds as the homepage poster and created stills from 18.2, 65.0 and 75.5 seconds.
- I replaced the OV09 text row with a visual project card that follows the FitPlanner and CZ card pattern and keeps OV09 third in the project order.
- I rebuilt `ov09.html` around the native HTML5 video, project context, my documented role, editing iterations, selected stills, credits and a return link to Projects.
- I documented my full personal roles as Producer, Actor and Editor, using my Portflow role reflections to describe the supported production, acting and editing contributions separately from the final video's on-screen team credits.
- I created three web-ready stills from distinct story and studio moments and added descriptive alternative text.
- I used responsive video and image layouts, native keyboard-operable video controls, visible focus styling and the site's existing reduced-motion rules.
- I used relative local asset paths, `preload="metadata"`, no autoplay, and no external video library so the project remains lightweight and GitHub Pages compatible.
- I based project details on the available OV09 Portflow iteration and role reflections and production concept. I did not copy the original master or research exports into the website.

### Original project iteration

The first cut was praised for its cinematography and storytelling, while feedback from Saida asked for faster pacing, more close-ups and more consistent colour grading. Josh said the robbery scene needed more drama and a clearer shift in intensity. In response, I shortened clips, cut closer to the music, added close-ups in emotional moments, increased the robbery scene's pace and reactions, and strengthened the contrast and tension leading into it. In client validation, Gio said the story was clear and the tension built well, while suggesting cleaner transitions and faster returns to the victims during the robbery. I report those as suggestions, not as changes I can confirm were implemented.

### Validation

I checked the homepage project order and OV09 card destination, opened the OV09 page, and followed its Back to Projects link to `index.html#work`. I reopened CZ Zorgvinder and verified its comparison stage, and opened FitPlanner, selected football and confirmed the planner displayed five training sessions.

I checked the homepage and OV09 page at 1440 × 900, 1366 × 768, 768 × 1024 and 390 × 844. Neither page had horizontal overflow, and the trailer retained its 16:9 ratio at each viewport. The poster and all three stills loaded. I verified native video controls, metadata and manual playback in the browser; the video played at 1920 × 1080 with a duration of 136.94 seconds. Keyboard focus was visible on the project navigation link, the video was keyboard-focusable, and reduced-motion settings disabled smooth scrolling and shortened transitions.

The browser recorded no console or page errors. It did report `ERR_ABORTED` for a video request when I navigated away during preload; the video metadata loaded and playback succeeded, so this was a cancelled preload rather than a missing asset. I also checked the local project links and asset paths. External portfolio feedback remains pending.

## 7 October 2026 - Skraw.io frontend development case

### Observation

My showcase lacked a substantial frontend case. FitPlanner demonstrates basic frontend implementation, while Skraw.io contains a broader interactive interface and team-development context.

### Decision

I added Skraw.io as my primary Frontend Development case while keeping FitPlanner as complementary evidence. I presented it as a team project and separated my documented frontend and UX/UI work from later shared implementation.

### Visual refinement (Iteration 5.1)

The multiplayer runtime screenshot was technically useful evidence, but visually too busy to be Skraw.io's primary first impression. I changed the main image to the cleaner Skraw landing screen and moved the multiplayer screenshot into the runtime-validation section. The landing screen communicates the product more clearly at first glance; the gameplay screenshot is more valuable later as evidence that I restored and tested the actual multiplayer application. This separates product presentation from technical validation.

### Evidence and contribution

The available Git history confirms my early component structure, initial `App.vue` layout, canvas baseline, drawing controls, game header, player list and frontend styling. Portflow supports my timer research and design, early implementation/prototype work, and UX validation through feedback and questionnaire work.

I describe my contribution in first person: I created the initial component-based game interface and early `App.vue` layout; established an early `CanvasBoard.vue` drawing baseline and drawing controls; worked on the initial `GameHeader.vue`, `PlayerList.vue` and general frontend styling; researched and designed the timer experience; contributed to an early timer implementation/prototype; and used user feedback and questionnaire work to validate interface and timer concepts. I do not claim authorship of the current repository countdown or sole ownership of the multiplayer backend, lobby, Socket.IO infrastructure, current synchronization, chat/scoring backend, AI helper or later advanced canvas functionality.

### Runtime validation

I restored the project locally and tested it in two independent browser sessions. I verified that both clients could join one lobby and receive ready/player updates, that freehand drawing and chat synchronized, and that an exact correct guess was recognized. The drawer saw the word while guessers saw placeholders.

The same runtime test found that the timer reached zero without advancing the round, the selected language did not carry through to gameplay, the external AI-helper service was unavailable, and some advanced canvas tool selections raised runtime errors. I use these as current-build limitations and do not describe the full game loop as reliable or production-ready.

### Interactive demonstration

I added a small, standalone canvas and timer interaction to `skraw.html` instead of embedding the unstable original multiplayer application. The portfolio-only demo uses the existing HTML, CSS and vanilla JavaScript stack, needs no backend or extra library, and is clearly labelled as separate from the original game.

I copied the approved active-gameplay screenshot into the portfolio's local assets and optimized it as a WebP image. Public pages reference only the local portfolio copy, not the research folder.

### Future

I kept the existing Selected Work card architecture and added Skraw.io as its strongest frontend case. After I finish the remaining project content, I plan to reorganize the full Selected Work section into Frontend Development, UX/UI & Client Work, and Media Creation.