# Kevin Kuk — Personal Portfolio

My personal portfolio site, built with React and hosted on AWS Amplify.

**Live site:** _add your Amplify URL here after deploying_

## Stack

- React (Create React App)
- Plain CSS (no framework)
- Hosted on AWS Amplify, with build/deploy triggered automatically on every push to `main`
- `.github/workflows/build.yml` runs a build check on every pull request

## Local development

```bash
npm install
npm start
```

Opens the app at http://localhost:3000 with hot reload.

## Build

```bash
npm run build
```

Outputs a production build to `build/`.

## Deployment

Hosted on AWS Amplify. Amplify watches the `main` branch and rebuilds/redeploys
on every push, using the build steps defined in `amplify.yml`.
