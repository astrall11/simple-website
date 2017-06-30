const express = require('express');
const logger = require('morgan');
const app = require('express')();
const home = require('jade').compileFile(__dirname + '/source/templates/home.jade');
const news = require('jade').compileFile(__dirname + '/source/templates/news.jade');
const about = require('jade').compileFile(__dirname + '/source/templates/about.jade');
const contact = require('jade').compileFile(__dirname + '/source/templates/contact.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res, next) => {
  try {
    let html = home({ title: 'Home' });
    res.send(html);
  } catch (e) {
    next(e);
  }
});

app.get('/news', (req, res, next) => {
  try {
    let html = news({ title: 'News' });
    res.send(html);
  } catch (e) {
    next(e);
  }
});

app.get('/about', (req, res, next) => {
  try {
    let html = about({ title: 'About' });
    res.send(html);
  } catch (e) {
    next(e);
  }
});

app.get('/contact', (req, res, next) => {
  try {
    let html = contact({ title: 'Contact' });
    res.send(html);
  } catch (e) {
    next(e);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
