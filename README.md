# Canstar Elements Design System

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This project is to test and demonstrate a the usefulness a design system for developing and maintaining the Canstars websites.
  - The system uses Angular 7 libraries to create modular web components which can be imported into projects.
  - It uses web components and shadow dom.
  - It implements various web elements to standardise pages use of features like titles & text, buttons, form inputs and common layouts.
  - Inspiration has been taken from [Polaris](https://polaris.shopify.com/components/get-started) by Shopify.

## Usage
### Installation & Serving

Canstar Elements Design System requires [Node.js](https://nodejs.org/) v10.14.2 to run.

First download the repo & setup node, install Angular CLI globally & dependencies.

```sh
$ git clone https://github.com/brewinski/Angular-7-Elements-POC.git
$ cd ./Angular-7-Elements-POC
```

Set up node & install Angular CLI globally.

```sh
$ nvm install && nvm use
$ npm install -g @angular/cli@^7.1.0 && npm install
```

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```

This will deploy the server to `http://localhost:4200/`.


### Running Tests

All tests can be run using the following command.

```sh
$ npm test
```

You can run specific library tests using:

```sh
$ npm test <library-name>
```


### Code scaffolding

We can use Angular CLI to do a number of helpful things for use. We can create new components:

```sh
$ ng generate component <component-name>
```

or

```sh
$ ng g component <component-name>
```

The things we can generate include: `ng generate directive|pipe|service|class|guard|interface|enum|module`.
This automatically creates the files, and updates the module files as needed.

We can also generate components for libraries using:

```sh
$ ng g component components/<component-name> --project=<library-name>
```
Make sure the project exits, and that you use the `components/` prefix to ensure all components are generated within a sub folder.

We can generate new libraries using:

```sh
$ ng generate library <new-library-name>
```
This will create a new library in the top level `projects/` folder.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Documentation

For our documentation we use [CompoDoc](https://compodoc.app/). This has been chosen to reduce the management of API documentation for the componencts lib.

To generate updated documentation for the projects you can run `compodoc projects -p tsconfig.json; compodoc -s`

### Component Readme Files

Each component must have a readme file in the same folder as the component. The naming convention is the same as for component files.

for example the component the component named `button.component.ts` should have a readme of `button.component.md`.
