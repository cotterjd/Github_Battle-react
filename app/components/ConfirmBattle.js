const
	React = require('react')
, puke = function (obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	}
, ConfirmBattle = function(props){
		return props.isLoading === true ? <p> LOADING! </p> : <p> CONFIRM BATTLE!: {puke(props)} </p>
	}

, nil = null;

module.exports = ConfirmBattle;
