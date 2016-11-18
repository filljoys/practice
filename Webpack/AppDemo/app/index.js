//require('./main.css');
import './main.css';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

//var sub = require("./sub");
//var $ = require('jquery');
//var moment = require('moment');

let app = document.createElement("div");

const myPromise = Promise.resolve(42);

myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>')
});

app.innerHTML = "<h1>Hello World, This is Webpack</h1>";
//app.appendChild(sub());
document.body.appendChild(app);
app.appendChild(generateText());