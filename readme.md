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

[Express](http://expressjs.com/) is one of the most popular web frameworks for node.js. To add express to the project, we add to the ```package.json``` file
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

4. lets create the basic express application (app.js)
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

5. lets return a real HTML (app2.js)
---

lets change the response to a real HTML page
```
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

we should replace it in the ```res.send('Hello World!');```


6. Using routes (app3.js)
----

What if we wanna have more pages? How can we support multiple pages in our app?
Express provides support using the ```get```, ```post```, ```put``` and ```delete``` methods (among others).

We add to our ```app.js``` -

```
app.get('/admin', function (req, res) {
    res.send('<html>'+
        '  <head>'+
        '    <title>Admin</title>'+
        '  </head>'+
        '  <body>'+
        '      <h1>Hay, you are on the admin page!</h1>'+
        '  </body>'+
        '</html>');
});
```

7. using templates for HTML (app4.js)
---

Having lots of HTML in the app.js file does not appear like a good idea. If is not the best way to manage HTML files
inside JS files. Express provides us with a different mechanism called templates. We will explore the EJS template engine
[tutorial](https://scotch.io/tutorials/use-ejs-to-template-your-node-application).

To install EJS, we add to our package.json file the dependency ```"ejs": "^1.0.0",``` and run ```npm install```.

We have to instruct our application to use the template engine and to create views (HTML template files) to use. We change
our ```app.js``` to have

```
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('app4/index');
});

app.get('/admin', function (req, res) {
    res.render('app4/admin');
});
```

add we extract the HTML to the ejs pages ```views/app4/index.ejs``` and ```views/app4/admin.ejs```.


8. Add client javascript and CSS files (app5.js)
----

serving static files with Express is done using the ```express.static``` middleware. We add the following in app.js

```
app.use(express.static('public'));
```

And add static files in the public folder of our project. For instance, lets add app.css

```
h1 {
    text-align: center;
    margin-top: 30px;
    color:red
}
```

And lets import it from the HTML pages by adding in the header the following -

```
    <link rel="stylesheet" type="text/css" href="app.css"/>
```

9. Add client dependencies
----

Lets add angular and bootstrap to the project

In package.json, we add to the dependencies

```
    "dependencies": {
        "express": "~4.8.3",
        "ejs": "^1.0.0",
        "bootstrap": "~3.3.4",
        "angular": "~1.3.7",
        "angular-route": "~1.3.7",
        "angular-animate": "~1.3.7",
        "font-awesome": "~4.3.0"
    }
```

10. Lets make the templates dynamic (app6.js)
----

We pass data to views by adding a second parameter to render.

e.g.

```
app.get('/admin', function (req, res) {
    res.render('app4/admin', {
      // this is a data object passed to the template
      name: "yoav",
      numbers: [1,2,4,5]
    });
});
```

to write a single variable in a template we use


```
<p><%= name %></p>
```

to loop over an array

```
<% numbers.forEach(function(number) { %>
    <li><%= number %></li>
<% }); %>
```

11. Logging
---

just use ```console.log()``` to log stuff to the console.

12. Debugging
---

We run node using the --debug-brk parameter

```
 node --debug-brk app6.js
```

And open the web page of the debugger [http://127.0.0.1:8080/debug?port=5858](http://127.0.0.1:8080/debug?port=5858)


13. Ajax
----

To support ajax, we will use jquery. First we add it to the project in package.json.

```
    "jquery": "~2.1.3"
```

Then we include it in our admin template

```
    <script src="jquery/dist/jquery.min.js"></script>
```

we need also to add support for serving static files from dependencies, from the node_modules folder. We do that using

```
app.use(express.static('node_modules'));
```

In the app.js file.


Next, we need to add a button and an event handler in the admin page
e.g.

```
$(document).ready(function() {

    $("#clear").click(function() {
        $.post("clear", function() {
            alert("data was cleared");
        })
    });
});
```

And we have to implement the ajax call itself in the app.js file

```
app.post('/clear', function (req, res) {
    numberOfCalls = 0;
    console.log("number of calls was cleared");
});
```






