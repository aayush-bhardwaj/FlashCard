## ReactJS/Redux, NodeJs and ElasticSearch - 2 - What is Node, NPM and express. 

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
How to download and install Node.js?

[Node Website](https://nodejs.org/en/)
or
[Follow this Digitalocean guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server
) 
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

How to install express?
```
npm install express --save
```

## ReactJS/Redux, NodeJs and ElasticSearch - 3 - Get the project structure and server ready. 

### Get the project structure ready :
---

Within your parent folder /React make a directory structure as follows :
```
-- /React
	-- .gitignore
	-- package.json
	-- server.js
	-- README.md
	-- webpack.config.js
	-- /node_modules
	-- /dev
		-- /js
			-- /components
		-- app.js
		-- /public
	-- src
		-- /js
			-- bundle.min.js
		-- /views
			-- index.pug
```
### Now let's get the server up and running .

Edit the server.js file -

```
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/dev/public'));
app.set('view engine' ,'pug');
app.set('views' , __dirname + '/src/views');

app.get('*',function(req,res){
	res.render('index');
})

app.listen(3000,function(){
	console.log('listening on port 3000');
})
```

### What is PUG?

Pug is a template engine, formerly known as Jade.

How to install
```
npm install pug --save
```

### So, now we have our server script ready but it's looking for a file named 'index' in the /views directory, So let's create a 'index.pug' file in /views.

```
doctype
html
    head
        title Hackavan
    body
        div(id='app')
        h1 Hello from Hackavan
```

Now go to the console and run your node server -

but before we do that let's install 'nodemon' :

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. 

```
npm install nodemon --save
```
So, run the command -
```
nodemon server
```

Cool, we have our server up and ready.

![server_up](https://cloud.githubusercontent.com/assets/10152651/21982990/e984d5e2-dc14-11e6-806d-d9153f266dd7.png)

## ReactJS/Redux, NodeJs and ElasticSearch - 4 - Understanding and configuring Webpack and Babel. 

What are those two files we created :
```
	- webpack.config.js
	- bundle.min.js
```

### Babel :

Babel is a Javascript compiler which helps us to write next generation javascript without worrying about it's compatibility with the older browsers.

```
/React$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save
```

### Webpack :

Webpack is a module bundler which takes care of basically two things -

1. Compiling all our JSX and JS code to work with React.
2. Taking care of all our imports that our package needs, So, it bundles all our JS code to a single JS file which can be rendered to our view page .
3. It also acts as a watcher. So, we don't need to restart our server after every change.

```
npm install webpack --save
```

So, as we installed babel and webpack locally, if we try to run babel from our terminal it doesn't recognise babel or webpack as a command .

```
/React$ babel
The program 'babel' can be found in the following packages:
 * babel-1.4.0
 * openbabel
Try: sudo apt-get install <selected package>
```

So, now go to file '/React/package.json' and edit the file to add :

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "babel" : "babel",
    "webpack" : "webpack"
  },
 ```
 So, now we can use commands 'babel' and 'webpack' :
 ```
 /React$ npm run babel
 /React$ npm run webpack
 ```

 Don't worry about them throwing errors presently, because we have not configured them.

 Now , the last step is to configure the file 'webpack.config.js'

```
module.exports = {
    entry : "./dev/app.js",
    output :{
        path : __dirname + "/src/js",
        filename : "bundle.min.js"
    },
    module : {
        loaders :[
            {
                test : /.jsx?$/,
                exclude : /(node_modules)/,
                loader : "babel-loader",
                query :{
                    presets : ["es2015" , "react"]
                }
            }
        ]
    },
    watch:true
}
```
All we are doing here is :

* All our input development will occur inside '/dev/app.js'
* When we compile them using Webpack it will create a output file '/src/js/bundle/min.js'
* if we have any file 'JS' or 'JSX' compile it using babel-loader
* exclude /node_modules whiling compilation
* Allow us to use the latest JS6.0 standards and react code.

Cool!