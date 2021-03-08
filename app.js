const express = require('express');
const app = express();
const engine = require('ejs-locals');
const bodyParser = require('body-parser');
// const axios = require('axios');

// Add public folder, for putting all static documents 
app.use(express.static('public'));

//ejs setting
app.engine('ejs',engine);
app.set('views', './views');
app.set('view engine', 'ejs');

//body-parser setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {extended: false}
));
app.post('/searchList',function(req, res){
    console.log(req.body);
    res.send('已發出POST請求了到/searchList！');
    // res.redirect('search');
});

app.post('/searchAJAX',function(req, res){
    res.send('已發出POST請求到/searchAJAX了！');
    console.log(req.body)

    // console.log(req.body);
    // console.log(req.body);
    // res.redirect('search');
});

app.get('/', function(req, res){
    res.render('index');
});

app.get('/search', function(req, res){
    res.render('search');
})

const port = process.env.PORT || 3000;
app.listen(port);