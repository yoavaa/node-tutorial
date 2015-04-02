setup
=====

1. install node.js
-----

* by [download](https://nodejs.org/download/) and install
* on Mac, using homebrew

```
brew install node
```

as part of node ```npm``` will be installed. NPM is the node.js package manager used to manage dependencies

2. create an npm package.json file
---

The ```package.json``` file defines details about your project, including used libraries. To create a base package.json file
we use the command

```
npm init
```

Answer the different questions. At the end you will get a file called package.json which looks like

```
{
  "name": "node-express",
  "version": "1.0.0",
  "description": "example project using node-express",
  "main": "app.js",
  "scripts": {
    "test": "run"
  },
  "author": "yoav abrahami",
  "license": "ISC"
}
```

3. add Express
---

Express is one of the most popular web frameworks for node.js. To add express to the project, we add to the ```package.json``` file
a dependencies part of the form

```
  "dependencies": {
      "express": "~4.8.3"
  }
```

and we call ```npm install``` to import the library to our project


