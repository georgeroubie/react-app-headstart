# Requirements

- [Nodejs 18+](https://nodejs.org/en/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- [VSCode](https://code.visualstudio.com/download)

# Installation

1. Download the project and open the project folder with VSCode.
2. Install the recommended VSCode extensions.
3. Open Terminal in the root folder and run `yarn`.

# Available commands

- `yarn dev`
- `yarn build`
- `yarn preview`
- `yarn lint`
- `yarn generate-pwa-assets`
- `yarn test`
- `yarn test:ui`
- `yarn coverage`

# How to use it for your own projects

1. Download the project, rename the project folder, and open the project folder with VSCode.
2. Change **name** and **version** here: `package.json`
3. Change application info here: `.env`
4. Replace this image `public/favicon.svg` with your logo. It must be at least `512x512` and `SVG`.
5. Run `yarn generate-pwa-assets` in order to generate the new favicons.
6. Delete this section. **Happy coding!**
