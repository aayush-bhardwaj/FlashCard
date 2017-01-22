## Now let's build the same FlashCard application using Redux architecture.

## STEP-1 - Get Your Node server running and project structure ready.

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
![2](https://cloud.githubusercontent.com/assets/10152651/22181818/56832b86-e0ba-11e6-91c7-8766d5088238.png)

6: Configure webpack.

```
module.exports = {
    entry : "./dev/js/app.js",
    output :{
        path : __dirname + "/src/js",
        filename : "bundle.min.js"
    },
    module : {
        loaders :[
            {
                exclude : /(node_modules)/,
                loader : "babel",
                query :{
                    presets : ["es2015" , "react"]
                }
            }
        ]
    },
    watch:true
}
```
Install webpack :

```
npm install webpack --save
```
Install babel : 

```
npm install babel babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react --save
```

7: Run 'webpack' in your terminal and in another terminal run your node server, we are good to go.

---
---

## STEP-2 : Let's configure our component.

1: Let's add out first component 'Navbar.js'

Create a file 'Navbar.js' in '/components'

```
import React from "react"


class Navbar extends React.Component{

    render(){
        return (
                <nav className='navbar navbar-default navbar-static-top'>
                     <div className='navbar-header'>
                        <p className='h4'>FlashCard Application</p>
                     </div>
                </nav>
            );
    }
}

export default Navbar;
```
2: Let's install the dependencies -

```
npm install react react-dom react-redux redux --save
```

3: So now we need to include it in our main component 'index.js' -

```
import React from 'react';
import Navbar from './Navbar';


const App = () => (
    <div>
        <Navbar />
    </div>
);

export default App;
```

4:Now we need to call it from file 'app.js' where later we will also configure our store.

```
import React from "react"
import {render} from "react-dom"
import App from './components/index'

render(
            <App />
    ,document.getElementById("app")
)
```

5. Now the last step will be to include script 'bundle.min.js' in file 'index.pug'

```
doctype
html
    head
        title Hackavan
    body
        div(id="app")
        h1 Hello From Hackavan
        link(href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", rel="stylesheet", integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", crossorigin="anonymous")
        script(src="/static/bundle.min.js" type="text/javascript")
```

Voila!

![3](https://cloud.githubusercontent.com/assets/10152651/22182681/721dbd0e-e0d1-11e6-8c28-3f675724fde5.png)

## STEP-3 : Configuring FlashCard component and defining our first action.

1: Create file 'Flashcard.js' in '/components'.

```
import React from "react"

class FlashCard extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            value :"",
            flashcards: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        var arr = this.state.flashcards;
        arr.push(this.state.value);
        this.setState({flashcards : arr})
        console.log(this.state.flashcards)
    }

    showFlashCards(){                    
        var namesList = this.state.flashcards.map(function(name){
                return <li className="list-group-item">{name}</li>;
                })

        return  <ul className="list-group">{ namesList }</ul>  
    }

    render(){
        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Add FlashCard</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit}>
                        <div className={'form-group '}>
                            <label className='control-label'>FlashCard</label>
                            <input type='text' className='form-control' ref='nameTextField' value={this.state.value} onChange={this.handleChange}/>                        

                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
                <hr/>
                {this.showFlashCards()}
            </div>
    );
    }
}

export default FlashCard;
```

Now include it in 'index.js'

```
import React from 'react';
import Navbar from './Navbar';
import Flashcard from './Flashcard'

const App = () => (
    <div>
        <Navbar />
        <Flashcard />
    </div>
);

export default App;
```

All, done we have replicated our previous Flashcard application but not using reux architecture presently.


