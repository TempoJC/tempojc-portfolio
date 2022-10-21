# TempoJC portfolio

Portfolio

## Project structure

    tempojc-portfolio/
    ├── src
    │   ├── components/
    │   │   ├─── atoms/
    │   │   │   └── <component>/
    │   │   │       ├── __tests__
    │   │   │       ├── <subcomponent>/
    │   │   │       │   └── ...
    │   │   │       ├── <component>.tsx
    │   │   │       ├── <component>.constants.ts (Optional)
    │   │   │       ├── <component>.hooks.ts (Optional)
    │   │   │       ├── <component>.types.ts (Optional)
    │   │   │       └── <component>.utils.ts (Optional)
    │   │   ├── molecules/
    │   │   │   └── <component>/
    │   │   │       ├── __tests__
    │   │   │       ├── <subcomponent>/
    │   │   │       │   └── ...
    │   │   │       ├── <component>.tsx
    │   │   │       ├── <component>.constants.ts (Optional)
    │   │   │       ├── <component>.hooks.ts (Optional)
    │   │   │       ├── <component>.types.ts (Optional)
    │   │   │       └── <component>.utils.ts (Optional)
    │   │   ├── organisms/
    │   │   │   └── <component>/
    │   │   │       ├── __tests__
    │   │   │       ├── <subcomponent>/
    │   │   │       │   └── ...
    │   │   │       ├── <component>.tsx
    │   │   │       ├── <component>.constants.ts (Optional)
    │   │   │       ├── <component>.hooks.ts (Optional)
    │   │   │       ├── <component>.types.ts (Optional)
    │   │   │       └── <component>.utils.ts (Optional)
    │   │   └── templates/
    │   │       └── <component>/
    │   │           ├── __tests__
    │   │           ├── <subcomponent>/
    │   │           │   └── ...
    │   │           ├── <component>.tsx
    │   │           ├── <component>.constants.ts (Optional)
    │   │           ├── <component>.hooks.ts (Optional)
    │   │           ├── <component>.types.ts (Optional)
    │   │           └── <component>.utils.ts (Optional)
    │   │
    │   ├── constants
    │   ├── config
    │   ├── mocks
    │   ├── pages
    │   │   └── api/
    │   ├── utils
    │   ├── <hooks>/
    │   │   └── <hook>/
    │   │       ├── __tests__
    │   │       ├── <hook>.ts
    │   │       └── <hook>.utils.ts (Optional)
    │   ├── state
    │   └── styles
    ├── types
    └── public

### Standard directories

- **atoms/:** Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.
- **molecules/:** They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.
- **organism/:**: Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.
- **templates/:**: In this state we stop composing components and begin to set their context. Moreover, the templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. That’s why it looks like a wireframe.
- **constants/:** App constants, similar files can be grouped in a folder.
- **hooks/:** Custom React hooks with generic logic. Each hook folder should contain a folder for testing and the hook implementation file. It may also have associated files such as utils.
- **pages/:** Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts.
- **styles/:** CSS files and/or custom Theme Providers.
- **types/:** Common App typescript interfaces/types.
- **utils/:** Common utils as formatters or normalizers.
- **state/:** App state structure. The main application store is in the store.ts file. Additional reducers are added as files `<resource>.slice.ts`.
- **public/:** Static assets folder (icons, images, text files, ...).
- **api/:** Main API fetcher functions/controllers.

## Indicaciones del proyecto

- **Commits:** Los commits siguen una nomenclatura, ver rules en [commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#rules).
- **Gestor de dependencias:** El proyecto se ha configurado con el gestor NPM.
- **Stylelint:** Tiene una configuración estándar para archivos CSS, si se quiere utilizar el lint en archivos diferentes al estandar(.css) se tiene que utilizar una configuración personalizada (https://stylelint.io/user-guide/get-started#linting-everything-else).

## Getting this project up and running

1.  **Fork or Clone**

    Fork or clone this project from Github to get your own copy of it.

1.  **Start developing.**

    Navigate into your new site’s directory and run.

    ```bash
    cd tempojc-portfolio/
    npm install / npm i
    npm run dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

## Documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React JS](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/index.html)
- [Jest](https://jestjs.io/es-ES/docs/getting-started)
- [Testing Library](https://testing-library.com/docs/)
- [Husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/#/)
- [Lint-staged](https://www.styled-components.com)
- [Stylelint](https://stylelint.io/)

## Authors

- **Jose Luis Camargo** - [TempoJC](https://github.com/TempoJC)
