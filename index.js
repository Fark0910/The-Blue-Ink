const express = require("express");
const app = express();
const path = require('path');
//const redditData = require('./data.json');
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
/*
app.use((req,res)=>{
    //incoming http req is parsed to object
    //check using console.log(dir)
    //console.log("youe request recieved")
    res.send('hi welcome') //to send html use link or `{your content}`
})*/

/*
app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/About',(req,res)=>{
    res.send('this is About page')
})
app.get('/Course',(req,res)=>{
    res.send('this is course page')
})


//gen req
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})
//query string
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})*/
app.get('/', (req, res) => {
    res.render('home')
})
app.listen(300,()=>{
    console.log("server is running!!")
})