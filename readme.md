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

And we call ```npm install``` to import the library to our project. once we run the command, a new folder will be
created in our project - ```node_modules```. The ```node_modules``` folder holds our dependencies - libraries that
other people have written that we can use for our application. In the ```node_modules``` folder we can find the
```express``` folder - of the library we have just installed.

Inside the ```node_modules/express``` folder we will find another ```node_modules``` folder which holds the dependencies
of the express library itself.

4. lets create the basic express application
---

Lets create a basic web application. Create a file ```app.js``` with the following code

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
```

Lets run the application

```
node app.js
```

And test it - by opening [http://localhost/3000](http://localhost/3000)







