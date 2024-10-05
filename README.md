# Over-React

This repository provides a **React** project bootrstrapped with **TypeScript** using `create-react-app`. It is designed as a starting point for building scalable and maintainable React applications.

The project includes various tools and configurations to standardize code style, enforce best practices, and maintain code quality across teams.

![](https://i.imgur.com/m7e5dOf.png)

## Features

### 1. React with TypeScript

- **React** is set up with **TypeScript** for enhanced type safety and development efficiency.
- Ready-to-use for writing typed React components, hooks, and utilities.

### 2. ESLint for Code Linting

- **ESLint** is configured with TypeScript and React support.
- **React Hooks** and **Accessibility** (JSX-a11y) rules are enforced to encourage best practices.
- Ensures consistent coding style and helps prevent common mistakes.

### 3. Prettier for Code Formatting

- **Prettier** is integrated with ESLint for automatic code formatting.
- A `.prettierrc` file defines consistent style rules such as:
  - Single quotes
  - Trailing commas where possible
  - 80 character line width
- Prettier runs automatically on file save and during commits.

### 4. Git Hooks with Husky and lint-staged

- **Husky** is configured to run **pre-commit** hooks.
- **lint-staged** ensures only staged files are linted and formatted, optimizing the commit process.
- Pre-commit hook runs:
  - **ESLint** for linting JavaScript/TypeScript files.
  - **Prettier** for formatting all code files (JS, TS, CSS, JSON, MD, etc.).

### 5. Testing with Jest and React Testing Library

- **Jest** is installed for unit testing and is integrated with **React Testing Library** for testing React components.
- Testing scripts:
  - `npm test`: Runs all test cases.
  - `npm run test:watch`: Runs Jest in watch mode.
  - `npm run test:coverage`: Runs tests and generates a coverage report.

### 6. **React Router for Routing**

This project uses **React Router** for client-side routing to enable navigation between different views within the app.

### 7. **React Query for APIs**

This project uses **React Query** to handle server-side API requests, caching, background refetching, and synchronization with ease. React Query simplifies managing data fetched from APIs, including handling loading and error states, and caching API responses for optimized performance.

### 8. **Translation (i18n) Support**

This project supports internationalization (i18n) using i18next and react-i18next. It allows the app to handle multiple languages and dynamically switch between them.
