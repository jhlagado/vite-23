# Set up a React project in Vite in Typescript and configure testing to use React Testing Library

Based on Teyim Asobo's excellent article

[Effortless Testing Setup for React with Vite, TypeScript, Jest, and React Testing Library](https://dev.to/teyim/effortless-testing-setup-for-react-with-vite-typescript-jest-and-react-testing-library-1c48)

For a project, say, `vite-23`

```
yarn create vite@latest vite-23
cd vite-23
yarn

yarn add -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event identity-obj-proxy jest-transformer-svg postcss-cli autoprefixer tailwindcss

npx tailwindcss init -p

```

create `jest.setup.ts`

```
import "@testing-library/jest-dom";
```

create `jest.config.js`

```
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
```

update `package.json`

```
  "scripts": {
    "test": "jest"
  }
```

tailwind.config.js

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install Storybook

```
npx storybook@latest init
yarn add -D @storybook/manager-api @storybook/theming
yarn add -D @storybook/addon-a11
```

Run server

```
yarn dev
```

Run tests

```
yarn test
```

Run storybook

```
yarn storybook
```
