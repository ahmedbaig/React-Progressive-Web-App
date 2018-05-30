# React Progressive Web Application with Service Workers

We are using the following technologies:
- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Webpack](https://webpack.github.io/) for compilation
- [FetchAPI](https://github.github.io/fetch/) for Dataset generation and [WebSockets](https://github.com/websockets/ws) for Dataset updates
- [CORS](https://www.npmjs.com/package/cors) for Cross origin resource sharing


## Requirements

- [Node.js](https://nodejs.org/en/) 6+

## Installation
- Install node packages with the package.json file.
```shell
npm install
```
## Configuration
- Service worker registration file is places in the `client/app` folder which is being imported and called in the `index.js`
- A `manifest.json` file is placed in the `client/public` folder and linked inside the `index.html`
- `manifest.json` can be generated from [Web app manifest generator](https://app-manifest.firebaseapp.com/)
- `service-worker.js` is placed in the root directory relative to the `index.html` file

## Running Production mode:

Production mode files are added to the `dist` folder. Production need to run on an `apache` server.
```shell
npm start
```

## Running Development (Webpack dev server) mode:

```shell
npm run start:dev
```
