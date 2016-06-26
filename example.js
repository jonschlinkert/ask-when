'use strict';

var askWhen = require('./');
var questions = require('base-questions');
var Base = require('base');
var app = new Base({isApp: true});

app.use(questions());
app.use(askWhen());

app.options.askWhen = 'not-answered';

// app.question('dest', 'Destination directory?', {default: process.cwd()})
//   .askWhen('dest', function(err, answers) {
//     if (err) return console.log(err);
//     console.log(answers)
//   });

app.question('dest', 'Destination directory?', {default: process.cwd()})
askWhen.askWhen(app, 'dest', function(err, answers) {
  if (err) return console.log(err);
  console.log(answers)
});


