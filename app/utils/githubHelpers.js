const
  axios = require('axios')
, id = "YOUR_CLIENT_ID"
, sec = "YOUR_SECRET_ID"
, param = "?client_id=" + id + "&client_secret=" + sec
, getUserInfo = function foo(username) {
		return axios.get('http://api.github.com/users/' + username + param);
	}
, getRepos = function bar(username) {
		return axios.get('http://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
	}
, getTotalStars = function thing(repos) {
		return repos.data.reduce(function(prev, current){
			return prev + current.stargazers_count;	
		}, 0);
	}
, getPlayersData = function blah(player) {
		return getRepos(player.login)
			.then(getTotalStars)
			.then(function foobar(totalStars) {
				return {
					followers: player.followers,
					totalStars: totalStars
				}
			})
	}
, calculateScores = function stuffthings(players) {
		return [
			players[0].followers * 3 + players[0].totalStars,
			players[1].followers * 3 + players[1].totalStars
		]
	}
,	helpers = {
		getPlayersInfo: function booboo(players) {
			return axios.all(players.map(function andstuff(username) {
				return getUserInfo(username)
			})).then(function infos(info) {
				return info.map(function serandstuf(user) {
					return user.data;
				})
			}).catch(function stufanderor(err) {
				console.warn('Error in getPlayersInfo', err)
			})
		},
		battle: function playefunc(players) {
			const 
				playerOneData = getPlayersData(players[0]),
				playerTwoData = getPlayersData(players[1]);

			return axios.all([playerOneData, playerTwoData])
				.then(calculateScores)
				.catch(function errstuff(err) {console.warn('Error in get PlayersInfo: ', err) })
		}
	}

, nil = null;

module.exports = helpers;
