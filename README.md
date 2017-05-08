#To Reproduce:

1. Download the test-case and install dependencies (`npm i` or `yarn`).
2. Start up the project with npm start. This should launch your web-browser at http://localhost:3000.
3. Open the console, and see that undefined is logged by main.js, which attempts to log the import of ./assets/arrow.svg.
4. In build/webpack.base.conf.js:59, set extract: true and run the build process again.
