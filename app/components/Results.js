const
	React = require('react')
, PropTypes = React.PropTypes

, puke = function (obj) {
		return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
	}
, Results = function(props){
		return (
			<div>Results: {puke(props)}</div>
		)
	}
, nil = null;

Results.protoTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
};
module.exports = Results;
