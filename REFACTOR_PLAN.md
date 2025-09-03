# Refactoring & Improvement Plan

This document outlines the steps to refactor the portfolio project into a clean, maintainable, and scalable single-page application.

### Phase 1: Project Cleanup & Structuring (Current Phase)

The goal of this phase is to establish a clean folder structure and remove unused boilerplate code.

- [ ] **Step 1.1: Create a `components` directory.**
  - We'll create a `src/components` folder to house our reusable React components.
- [ ] **Step 1.2: Move components into separate files.**
  - Extract `Nav`, `Hero`, and `Projects` into their own files inside `src/components`. This improves modularity and makes the code easier to find and manage.
- [ ] **Step 1.3: Update `App.jsx` to use the new components.**
  - The main `App.jsx` file will become much cleaner, serving as the primary layout file that imports and assembles the other components.
- [ ] **Step 1.4: Remove unused Vite boilerplate.**
  - Delete files like `App.css` and unused assets (`react.svg`) that came with the initial Vite setup, as we are using Tailwind CSS for all styling.

### Phase 2: Component & Layout Refinement

With a clean structure, we'll focus on improving the code inside our components.

- [ ] **Step 2.1: Simplify the `Hero` component's layout.**
  - Review the flexbox implementation to make it more straightforward while preserving the existing design. We'll ensure the code is easy to understand and modify.
- [ ] **Step 2.2: Enhance the `Nav` component's accessibility.**
  - Improve the mobile menu to correctly manage focus when it opens and closes, ensuring it's fully accessible to keyboard users.
- [ ] **Step 2.3: Prepare the `Projects` component for real data.**
  - Refactor the `Projects` component to accept data via props, making it easy to add more projects in the future without duplicating code.

### Phase 3: Polishing & Best Practices

The final phase is about adding polish and ensuring the site is production-ready.

- [ ] **Step 3.1: Conduct a full accessibility review.**
  - Check for proper use of semantic HTML, ARIA attributes, and color contrast.
- [ ] **Step 3.2: Implement SEO best practices.**
  - Add or update `title` and `meta` tags in `index.html` to improve search engine visibility.
- [ ] **Step 3.3: Set up code formatting.**
  - Configure Prettier to automatically format the code, ensuring a consistent style across the project.
