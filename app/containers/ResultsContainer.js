const
	React = require('react')
, Results = require('../components/Results')
, githubHelpers = require('../utils/githubHelpers')

, ResultsContainer = React.createClass({
		getInitialState: function () {
			return {
				isLoading: true,
				scores: []
			}
		},
		componentDidMount: function() {
			githubHelpers.battle(this.props.location.state.playersInfo)
				.then(function (scores) {
					this.setState({
						scores: scores,
						isLoading: false
					})
				}.bind(this))
		},
		render: function () {
			return (
				<Results 
					isLoading={this.state.isLoading} 
					playersInfo={this.props.location.state.playersInfo}
					scores={this.state.scores}/>
			);
		}
	})

, nil = null;

module.exports = ResultsContainer;
