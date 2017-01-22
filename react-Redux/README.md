## Now let's build the same FlashCard application using Redux architecture.

## STEP-1

1: Get the project structure ready.

```
npm init
```

So, now we have our 'package.json' ready .

```
{
  "name": "flashcard",
  "version": "1.0.0",
  "description": "Youtube tutorial for react-redux",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aayush-bhardwaj/FlashCard.git"
  },
  "author": "Aayush",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/aayush-bhardwaj/FlashCard/issues"
  },
  "homepage": "https://github.com/aayush-bhardwaj/FlashCard#readme"
}
```

2: Create few empty files in your root directory .

```
--/react-Redux
    --package.json
    --server.js
    --README.md
    --.gitignore
    --webpack.config.js
    --/dev
        --/js
            --/actions
            --/components
            --/reducers
            --app.js
            --store.js
        --/public
    --/src
        --/js
            --bundle.min.js
        --/views
            --index.pug
```
![1](https://cloud.githubusercontent.com/assets/10152651/22181774/dcb863e4-e0b8-11e6-8448-1c21c11bc8d5.png)

Cool, so we have our project structure ready.

3: Now le's get our server ready as well.

Paste the below code in 'server.js' , we are well aware of this file .

```
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/src/js'));
app.set('view engine' ,'pug');
app.set('views' , __dirname + '/src/views');

app.get('*',function(req,res){
    res.render('index');
})

app.listen(3000,function(){
    console.log('listening on port 3000');
})
```

Now, we need to install the dependency -

```
npm install express --save
npm install pug --save
```

4: Let's get the index file ready.

```
doctype
html
    head
        title Hackavan
    body
        div(id="app")
        h1 Hello From Hackavan
```

5: All good run your node server .

```
nodemon server
```





