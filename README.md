# Ext Seed Project - Ext JS 5 + Unit Testing

This project is an application skeleton for a typical [Ext JS](http://www.sencha.com/products/extjs/) web app.

## Features

1. Create Ext Seed workspace
2. Create Ext Seed app
3. Run Ext Seed app
4. Add Unit Testing Frameworks

## Prerequisites

You will need:
- [Sencha Cmd](http://www.sencha.com/products/sencha-cmd/)
- [Node JS](http://nodejs.org/)

## Steps

### 1. Create Workspace

Use or create a local folder for the project. Use the terminal and run the following commands to create the Ext Seed workspace.

```
sencha generate workspace -ext ext-seed-workspace
cd ext-seed-workspace
```

### 2. Create the ExtSeedApp

```
cd ext-seed-workspace
sencha -sdk ext generate app ExtSeedApp ext-seed-app
```

### 3. Run the ExtSeedApp

Serve the ExtSeedApp created using the build-in web server in dev mode

```
cd ext-seed-app
sencha app watch
```

Browse the ExtSeedApp in a browser using: http://localhost:1841/ext-seed-app/ or open a new terminal window and enter:

```
open http://localhost:1841/ext-seed-app/
```

Note: serving the app using 'sencha app watch' enables automatic app rebuild when the source code is updated. This could be very handy for development.

### 4. Add Unit Testing Frameworks

We are going to use Node JS, Jasmine and Karma to create unit testing for the Ext Seed app.

#### 4.1 Create 'package.json' for Node JS

```
cd ext-seed-app
```
Create a 'package.json' with the following settings.

package.json
```
{
    "name": "ext-seed-testing",
    "private": true,
    "version": "0.0.0",
    "description": "Jasmine Unit Testing",
    "devDependencies": {
        "phantomjs": "~1.9.11",
        "karma": "~0.12.24",
        "karma-cli": "~0.0.4",
        "karma-jasmine": "~0.2.2",
        "karma-coverage": "~0.2.6",
        "karma-html-reporter": "~0.2.4",
        "karma-phantomjs-launcher": "~0.1.4",
        "karma-chrome-launcher": "~0.1.4"
    }
}
```

#### 4.2 Install Node JS modules

Run the following to install the node js modules.

```
cd ext-seed-app
npm install
```
Note: add 'node_modules' to your .gitignore if you haven't.

#### 4.3 Create the Jasmine specs

Create `"spec"` folder and add the specs.

```
cd ext-seed-app
mkdir spec
```

#### 4.4 Run the tests

```
cd ext-seed-app
npm test
```