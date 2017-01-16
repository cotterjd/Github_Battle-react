const
	React = require('react')
, styles = require('../styles')

, MainContainer = function(props) {
		return (
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				{props.children}
			</div>
		)
  }
, nil = null;

module.exports = MainContainer;
