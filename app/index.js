const 
  React = require ('react')
, ReactDOM = require ('react-dom')
, routes = require('./config/routes')

, nil = null;

ReactDOM.render (
  routes 
, document.getElementById('app')
)
