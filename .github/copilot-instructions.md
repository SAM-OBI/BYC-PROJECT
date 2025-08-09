# Copilot Instructions for BYC-PROJECT

## Project Overview
This is a static website for BYC Africa, built with HTML, CSS, Bootstrap, and minimal JavaScript. The site consists of multiple pages (`aboutUs.html`, `index.html`, `blog.html`, etc.) and uses a shared stylesheet (`style.css`). Images are stored in the `images/` directory, and scripts in `js/`.

## Architecture & Patterns
- **No build system or framework**: All files are static and directly editable. No compilation or bundling required.
- **Bootstrap 5** is used for layout and responsive design. Custom styles are in `style.css`.
- **Navigation and layout** are repeated across pages. Changes to navigation/footer should be made in all HTML files for consistency.
- **Images** are referenced with relative paths from the `images/` directory.
- **JavaScript** is minimal and located in `js/index.js`. Use vanilla JS for interactivity.

## Developer Workflows
- **Preview**: Open HTML files directly in a browser. No server required.
- **Debugging**: Use browser dev tools for inspecting layout, styles, and JS errors.
- **No tests or build commands**: There are no automated tests or build steps.

## Conventions
- **Class naming**: Custom classes use `about-`, `default-`, etc. Bootstrap utility classes are used for layout.
- **Inline styles**: Some cards use inline `style` attributes for sizing. Prefer CSS classes for maintainability.
- **Page structure**: Each HTML file follows a similar structure: navbar, breadcrumb, main content, pagination, footer.
- **Accessibility**: Use semantic HTML and proper `alt` attributes for images.

## Integration Points
- **Bootstrap CDN**: Linked in `<head>` of each HTML file.
- **Font Awesome CDN**: Used for icons.
- **No external APIs or dynamic data**: All content is static.

## Key Files & Directories
- `aboutUs.html`, `index.html`, `blog.html`, etc.: Main pages
- `style.css`: Custom styles
- `images/`: All image assets
- `js/index.js`: Custom scripts

## Example Patterns
- To add a new award card, copy an existing card block in `aboutUs.html` and update its content.
- To update navigation, edit the navbar section in each HTML file.
- For new styles, add to `style.css` and use Bootstrap classes for layout.

---
For questions about project structure or conventions, review the HTML files and `style.css` for examples. No backend or build tools are present.
