'use strict';

//server setup
const express = require('express'), 
      app = express(),
      port = process.env.PORT || 3000;


//non server requires
const path = require('path'),//path manipualtion
      logger = require('morgan'),//logging
      bodyParser = require('body-parser'),//boddy parse
      compression = require('compression'),//compress
      helmet = require('helmet'),//security
      consolidate = require('consolidate');//view engine

//local file require


//server config
app.use(compression);
app.use(helmet);
app.use(express.static(__dirname + '/src'));//set statis files
app.engine('html', consolidate.swig);//set up html as file default
app.set('views', path.join(__dirname, '/src'));
app.set('view engine', 'html');

app.get('/', (req,res) => {
   res.render('index');
});

//server listening
app.listen(port, () => {
   console.warn(`Your server is up and running on port ${port}`);
});
