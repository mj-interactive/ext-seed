# Ext Seed Project - a seed project for Ext JS 5 apps

This project is an application skeleton for a typical [Ext JS](http://www.sencha.com/products/extjs/) web app.

## Goals of the Ext Seed project

Build an Ext seed project step-by-step through Test Driven Development (TDD) and the best practice. 

1. Create Ext Seed workspace (DONE)
2. Create Ext Seed app (DONE)
3. Run Ext Seed app (DONE)
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