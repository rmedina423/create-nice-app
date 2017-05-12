![doggo](https://media.giphy.com/media/1M4w25h7a3PEs/giphy.gif)
<p align="center">
  <img src="https://media.giphy.com/media/3og0IwJPfGwyMt9uHm/giphy.gif"/>
  <br>
  <a href="https://travis-ci.org/brantstuns/create-nice-app">
    <img src="https://travis-ci.org/brantstuns/create-nice-app.svg?branch=master"/>
  </a>
  <a href="https://coveralls.io/github/brantstuns/create-nice-app?branch=master">
    <img src="https://coveralls.io/repos/github/brantstuns/create-nice-app/badge.svg?branch=master"/>
  </a>
  <a href="https://badge.fury.io/js/create-nice-app">
    <img src="https://badge.fury.io/js/create-nice-app.svg"/>
  </a>
  <a href="https://david-dm.org/brantstuns/create-nice-app">
    <img src="https://david-dm.org/brantstuns/create-nice-app/status.svg"/>
  </a>
  <a href="https://david-dm.org/brantstuns/create-nice-app?type=dev">
    <img src="https://david-dm.org/brantstuns/create-nice-app/dev-status.svg"/>
  </a>
</p>

---
## Install
```
yarn global add create-nice-app 
```
THEN (You may have to open a new shell for the command to appear after a yarn global install):
```
$ create-nice-app 
```
---

#### Create-nice-app spins up a very basic app setup, designed to just work and let you hit the ground running. I'm only imposing a few (😉) of my opinions on you! However, it's really easy to swap pieces out so this serves as a nice minimal, modern  fullstack Javascript boilerplate generator.

### What you're getting:
Frontend: 
- React 15.5+
- SCSS
- React Router 4

Backend:
- Express

Testing:
- Jest 20
- Enzyme

Build:
- Yarn
- Webpack 2
- Babel
- Eslint w/ a modified Airbnb's eslint config
---
### Yarn Scripts available: 
| name | what it does | 
| --- | --- |
| lint | runs eslint using a slightly modified airbnb eslint config |
| test | runs both the client and server tests via jest |
| test:coverage | same as above but passing the --coverage flag to jest |
| test:client | run the client or frontend tests |
| test:server | run the server or backend tests |
| presendCoverage | merges the client and server code coverages to one lcov |
| sendCoverage | I don't know how you do code coverage, but however you do it do it here |
| webpack | runs the production webpack bundle |
| webpack:watch | runs the development webpack bundle which has watch enabled |
| server | runs the server for production via the node command with NODE_ENV set to 'prodution' |
| server:watch | runs the server for development with nodemon and NODE_ENV set to 'development' |
| styles | compiles the scss files to a single styles.css |
| styles:watch | same as styles but with the --watch flag passed to node-sass |
| build | builds the apps assets for production using webpack and node-sass |
| prod | runs the build command and starts the production server |
| dev | runs all the watchers in parrelel for local development |
