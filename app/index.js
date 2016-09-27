const 
	React = require ('react')
, ReactDOM = require ('react-dom')
, HelloWorld = React.createClass ({
		render: function () {
			return (
				<div> Hello World </div>
      )
		}
  })
  
,	nil = null;
    
ReactDOM.render (
	<HelloWorld />
, document.getElementById('app')
)
