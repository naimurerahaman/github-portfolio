# Copilot Instructions for AI Coding Agents

## Project Overview
This is a personal portfolio website project. It is a static site with the following structure:
- `index.html`: Main HTML file, contains the structure and content of the portfolio.
- `style.css`: Main stylesheet for all visual styles.
- `script.js`: Handles any interactive or dynamic behavior.
- `fonts/`: Custom fonts used for typography.
- `images/`: Contains profile and background images.

## Key Patterns & Conventions
- All content is loaded statically; there is no backend or build process.
- Custom fonts are loaded from the `fonts/` directory and referenced in `style.css`.
- Images are referenced with relative paths from the `images/` directory.
- JavaScript is used for simple DOM manipulation or interactivity, if present.
- Keep HTML, CSS, and JS modular and separated by file.

## Developer Workflow
- Open `index.html` directly in a browser to view the site.
- Edit `style.css` for visual changes; edit `script.js` for interactivity.
- No build, test, or deployment scripts are present or required.
- No external dependencies or package managers are used.

## Project-Specific Guidance
- Maintain semantic HTML structure for accessibility and SEO.
- Use relative paths for all asset references.
- When adding new fonts or images, place them in the appropriate directory and update references in `style.css` or `index.html`.
- Avoid introducing frameworks or build tools unless explicitly requested.

## Example Asset Reference
```html
<link rel="stylesheet" href="style.css">
<img src="images/emon.jpg" alt="Profile">
```

## Key Files
- `index.html`
- `style.css`
- `script.js`
- `fonts/`
- `images/`

---
For any new features, follow the existing static site structure and keep the codebase simple and maintainable.