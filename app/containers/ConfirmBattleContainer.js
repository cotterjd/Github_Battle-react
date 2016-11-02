const
  React = require('react')
, githubHelpers = require('../utils/githubHelpers')
, ConfirmBattle = require('../components/ConfirmBattle')
, ConfirmBattleContainer = React.createClass({
		contextTypes: {
			router: React.PropTypes.object.isRequired
		},
		getInitialState: function() {
			return {
				isLoading: true,
				playerInfo: []
			}
		},
		componentDidMount: function() {
			const query = this.props.location.query;
			githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
				.then(function (players) {
					this.setState({
						isLoading: false,
						playersInfo: [players[0], players[1]]//why not pass loading directly in
					})
				}.bind(this));
		},
		render: function() {
			return (
				<ConfirmBattle 
					isLoading={this.state.isLoading}
					playersInfo={this.state.playersInfo} />
			)
		}
	})

, nil = null;

module.exports = ConfirmBattleContainer;
