# React-Datatable [![Build Status](https://travis-ci.org/doganozturk/react-datatable.svg?branch=master)](https://travis-ci.org/doganozturk/react-datatable) [![codecov](https://codecov.io/gh/doganozturk/react-datatable/branch/master/graph/badge.svg)](https://codecov.io/gh/doganozturk/react-datatable)

A SPA using React.js, an ejected Create-React-App as its boilerplate. It can be considered as a tree list case study. Application starts with a flat object, than first unflattens it. After that using that object as its data, application shows the user a responsive tree view where interacting user can expand an item, collapse it, delete it or traverse its children objects which have the same interaction capabilites as their respective parent elements.

### Demo
https://react-datatable.surge.sh

### Prerequisites

You need Node.js (v7.10.0), NPM and/or Yarn on your local machine. I strongly recommend usage of [NVM](https://github.com/creationix/nvm) for managing different versions of Node on your local machine.

### Installing

React-Datatable uses Create-React-App as its base. So you have all commands that come with it and many more!

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn start

# running the linters and Jest test
yarn test

# test task but with coverage reports by Istanbul
yarn run test:ci

# build for production with minification, sourcemaps etc.
yarn run build

# build for production and view the bundle analyzer report
yarn run build && yarn run analyze
```

## Running the tests and linters

The project uses current community favorites such as ESLint, Stylelint and Prettier for formatting both. I use VSCode as my text editor and there are appropriate plugins for these tools. All known and respected IDEs and editors have that kind of tools, so I recommend installing them before development.

For tests, the project uses Jest from Facebook. A Snapshot testing utility, Jest makes testing easy and fast. From my experience, I think it really opens the way for TDD practices. Istanbul is used for coverage reports and project is already configured so that after each succesful Travis-CI build, reports are being sent to Codecov for coverage reports.

## Deployment

Project uses Travis-CI for continuous integration and amazing Surge.sh as its host. You can make appropriate changes and use this project's setup as a boilerplate for your own projects.

## Authors

* **Doğan Öztürk** - [github](https://github.com/doganozturk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.