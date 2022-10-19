# NextJS Starter Skeleton

## Descripción

Esqueleto con toda la configuración necesaria para empezar un proyecto en NextJS.

El proyecto cuenta con typescript, eslint, prettier, jest, husky, lint-staged,

## Project structure

    nextjs-starter-skeleton/
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
    │   ├── mockData
    │   ├── pages
    │   │   └── api/
    │   ├── utils
    │   ├── <hooks>/
    │   │   └── <hook>/
    │   │       ├── __tests__
    │   │       ├── <hook>.js
    │   │       └── <hook>.utils.js (Optional)
    │   ├── state
    │   └── styles
    ├── types
    ├── public
    └── static

### Standard directories

- **atoms/:**: Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.
- **molecules/:**: They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.
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

- **commits:** Los commits siguen una nomenclatura (https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
- **Gestor de paquetes:** El proyecto se ha configurado para usar NPM.
- **Stylelint:** Tiene una configuración estandar para archivos CSS, si se quiere utilizar el lint en archivos diferentes se tiene que utilizar una configuración personalizada (https://stylelint.io/user-guide/get-started#linting-everything-else).

## Next JS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
