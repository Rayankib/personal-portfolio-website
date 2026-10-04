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