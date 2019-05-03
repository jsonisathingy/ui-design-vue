<h1>ForgeRock UI Design System</h1>

<a name="quick-start"></a>
## Quick start

- [Download and install the latest node](https://nodejs.org/en/download/) or verify your node version `node -v`
- Check that you have the latest npm with `npm install npm@latest -g`
- Clone or download the repo: `https://github.com/ForgeRock/ui-design`
- Navigate to your `ui-design` directory and install dependencies with npm: `npm install`
- Start development server with npm: `npm run dev`

<a name="development-server"></a>
## Development server

`npm run dev` starts up a standalone node server primarily for ease of development. This development server also provides an easy way to test and understand various identity management features.

- Uses port `8080` by default, and auto-increments the port if `8080` is not available
- Assumes `openidm` is the context for the rest service (e.g. http://localhost:8080/openidm/info). If this is not the case, change idmContext `/src/main.js`, or context `/index.html`.
- Supports hot reloading and error display when code is changed
- Includes its own [testing](#testing)
- Built off [Vue Webpack Template](http://vuejs-templates.github.io/webpack/)

<a name="development-server-tools"></a>
## Development server tools

- [Node](https://nodejs.org/en/download/) - Version 9.0.0 or newer (ForgeRock development verified 9.5.0)
- [NPM](https://www.npmjs.com/) - Version 5.0.0 or newer (ForgeRock development verified 6.4.1)

<a name="testing"></a>
## Testing

- Run tests with npm: `npm test`

Running tests provides a console display with test results and generates a viewable testing result report for browser display `test/unit/coverage/lcov-report`.

- Run tests for browser debugging: `npm run unit:watch`

This command runs two copies of the tests - one in the phantom JS headless browser and another at `localhost:9876` that can be used to watch or debug on your local browser.

<a name="testing-tools"></a>
## Testing tools

The following testing tools are installed when you install the project dependencies:

- [Vue testing utils](https://vue-test-utils.vuejs.org/) - Testing util library for Vue components
- [Sinon](https://sinonjs.org/) - Testing util library (stubs and spies)
- [Karma](https://karma-runner.github.io/2.0/index.html) - Testing harness
- [Mocha](https://mochajs.org/) - Testing framework
- [Chai](http://chaijs.com/) - Assertion library
- [PhantomJS](https://github.com/ariya/phantomjs) - Headless browser

<a name="application-tools"></a>
## Application tools

The following application tools are installed when you install the project dependencies:

- [Vue](https://vuejs.org/v2/api/) - Primary Javascript framework for the project
- [Vue Router](https://router.vuejs.org/en/) - Application routing Vue library
- [Vue Bootstrap](https://bootstrap-vue.js.org/) - Bootstrap 4 Vue components
- [Axios](https://github.com/axios/axios) - Javascript Promise Library
- [Vue i18n](https://kazupon.github.io/vue-i18n/en/) - Translation library for Vue
- [Vee Validate](https://github.com/baianat/vee-validate) - Form validation for Vue
- [lodash](https://lodash.com/) - Util library for preforming various efficient calculations

There are several other libraries included with both node and the application, but these are the primary core libraries used throughout. For additional libraries, see package.json `/package.json`
