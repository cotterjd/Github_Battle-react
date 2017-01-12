const
  React = require('react')
 
, Main = React.createClass({
    render: function () {
      return (
				<div className='main-container'>
	  			{this.props.children}
				</div>
      )
    }
  })

, nil = null;

module.exports = Main;


