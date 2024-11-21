# Front-End part of the project

Uses JavaScript/TS without any frameworks.
Build with Webpack.

## Scripts

- `npm install` - install dependencies.
- `npm run start` - start development server.
- `npm run build` - build project.

## Project structure

- `src` - source code.
  - `components` - reusable components.
    - `icons` - icon components.
    - `ui` - UI components.
  - `pages` - pages. May have their own hierarchy of different components. 
  - `services` - services for working with the backend.
  - `styles` - styles.
    - `components` - styles for components.
    - `variables` - variables for styles (colors, fonts, etc.).
  - `utils` - utility functions.
- `dist` - build output.