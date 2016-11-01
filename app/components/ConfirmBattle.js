const
	React = require('react')
, ConfirmBattle = function(props){
		return props.isLoading === true ? <p> LOADING! </p> : <p> CONFIRM BATTLE! </p>

	}

, nil = null;

module.exports = ConfirmBattle;
