const Express = require('express');
const procces = require('process');
const app = new Express();
const build = require('./build/pageBuild');
var bodyParser = require('body-parser'); //npm install body-parser
const port = 3000;

//body 
app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
app.use(bodyParser.json())


//home
app.get('/', (req, res) =>{
    res.send('home page');
    console.log(procces.env);
    console.log(procces.env.USERNAME);
})

//build
app.post('/build', (req, res) =>{
    res.send('build page for gulp|yarn build');
    build.pageBuild(req.body);
})


//server
app.listen(port, ()=>{
    console.log('service running...');
})
