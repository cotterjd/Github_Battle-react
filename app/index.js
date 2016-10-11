const 
  React = require ('react')
, ReactDOM = require ('react-dom')
, USER_DATA = {
    name: 'Casey Cotter',
    username: 'cacotter',
    image: 'http://www.asapenergyinc.com/wp-content/uploads/2015/10/DSCF0014.jpg'
  }
, ProfilePic = React.createClass({
    render: function () {
      return <img src={this.props.imageUrl} style={{width: 100, height: 100}} />
    }
  })
, ProfileLink = React.createClass({
    render: function () {
      return (
        <div>
	  <a href={'https://www.github.com/' + this.props.username}>
	    {this.props.username}
	  </a>
	</div> 
      )
    }
  })
, ProfileName = React.createClass({
    render: function () {
      return (
        <div>{this.props.name}</div>
      )
    }
  })
, Avatar = React.createClass({
    render: function () {
      return (
        <div>
	  <ProfilePic imageUrl={this.props.user.image} />
	  <ProfileName name={this.props.user.name} />
	  <ProfileLink username ={this.props.user.username} />
	</div>
      )
    }
  })

  /*FIRST
  Focused
  Independent
  Reusable
  Small
  Testable
  */
  
, nil = null;
    
ReactDOM.render (
  <Avatar user={USER_DATA} />
, document.getElementById('app')
)
