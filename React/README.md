## Node.js 
---

### What is [Node](https://nodejs.org/en/) ?

* Node.js is a javascript runtime built on Chrome's V8 javascript engine. 
* Basically, Node gives you an environment to run your Javasscript code on 	  your machine, which was previously confined only to your browser.
* So, whatever you used to do using PHP or Python can now be done in    javascript using node.js.
* It helps you run your Web Server.

A simple example -

```
var http = require("http");

var server = http.createServer(function(req,res){
	console.log("Hello someone there?")
	res.write("Hey it's me !");
	res.end();
});

server.listen(3000);
```

### What is [npm](https://www.npmjs.com/) ?

* NPM is Node package manager, which is bundled with your Node installation.
* Similar to PIP for Python it helps you install and manage Node packages.

How do we install the node packages using npm?

```
npm install <package_name>
```
What is package.json file?

* This is basically your setting/config file for your entire application.
* it has a list of all your dependencies.
* So, whenever we install any package it gets saved in the package.json file as a dependency.

How do we create the package.json file?
```
npm init
```
NPM walks you through a series of steps and it creates your package.json file in the application folder. 

```
npm install --save <package_name> 
eg. npm install --save react
```
* Or, we could do the other way round, create a list of all the dependencies you require for your application along with their version and save them in your package.json file and run.
```
npm install
```
* And npm will take care of installing all those packages, GREAT!
* Where does it save those modules we just installed.
	Ans: In a folder named <node_modules>.

So, now if you have to share your application with anyone, or run it in the dev environment all you need to do is to share your files including package.json, and all one has to do is
```
npm install
```
And, boom the dependencies are installed in his machine, Cool!

### What is [Express](http://expressjs.com/) ?

* Express is a web framework for Node.js.
* Express builds upon Node and makes building Node application way easier.