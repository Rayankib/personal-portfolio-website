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