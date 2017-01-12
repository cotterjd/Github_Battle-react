const
  React = require('react')
, ReactRouter = require('react-router')
, Link = ReactRouter.Link
, MainContainer = require('./MainContainer')

, Home = React.createClass({
    render: function () {
      return (
        <MainContainer> Hello from Home! 
          <h1>Github Battle</h1>
	  			<p className='lead'>Some fancy motto</p>
	  			<Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-success'>Get Started</button>
	  			</Link>
				</MainContainer>
      )
    }
  })

, nil = null;

module.exports = Home;

