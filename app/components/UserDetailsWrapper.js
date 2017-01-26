const
  React = require('react')
, PropTypes = React.PropTypes

, UserDetailsWrapper = function (props) {
	return (
		<div className='col-sm-6'>
			<p className='lead'>{props.header}</p>
			{props.children}
		</div>
		)
  }
;

module.exports = UserDetailsWrapper;
