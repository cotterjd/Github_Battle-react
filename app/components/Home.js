const
  React = require('react')
, ReactRouter = require('react-router')
, Link = ReactRouter.Link
, transparentBg = require('../Styles').transparentBg

, Home = React.createClass({
    render: function () {
      return (
        <div className='jumbotron col-sm-12 text-center' style={transparentBg}> Hello from Home! 
          <h1>Github Battle</h1>
	  <p className='lead'>Some fancy motto</p>
	  <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-success'>Get Started</button>
	  </Link>
	</div>
      )
    }
  })

, nil = null;

module.exports = Home;

