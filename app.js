const express = require ('express');
const ejs = require('ejs')
const path = require('path');

const app = express();
const port = 3000
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({extended: false}));


app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/create-account', (req,res) =>{
    res.render('create-account')
})

app.listen(process.env.PORT || port, function(){
    console.log(`server running on port ${port}`)
} )
