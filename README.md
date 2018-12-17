# Angular-7-Elements-Desing-System

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Setup

Run `git clone https://github.com/brewinski/Angular-7-Elements-POC.git` then into `cd ./Angular-7-Elements-POC`

Run `nvm use` if you don't have the required node version installed run `nvm install`

Installl the latest version of angular CLI globally `npm install -g @angular/cli@^7.1.0`

Run `npm install`

The library needs to be built into the `dist` folder. building the library allows it to behave as if it were an npm package.

To build the library,

Run `ng build made-with-love`

Run ng serve

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

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
