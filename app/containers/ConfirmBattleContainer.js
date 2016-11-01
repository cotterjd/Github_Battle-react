const
  React = require('react')
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
			//Fetch info from github and update state
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
