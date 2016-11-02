const
  axios = require('axios')
, id = "YOUR_CLIENT_ID"
, sec = "YOUR_SECRET_ID"
, param = "?client_id=" + id + "&client_secret=" + sec
, getUserInfo = function (username) {
		return axios.get('http://api.github.com/users/' + username + param)
	}
,	helpers = {
		getPlayersInfo: function(players) {
			return axios.all(players.map(function (username) {
				return getUserInfo(username)
			})).then(function (info) {
				return info.map(function (user) {
					return user.data;
				})
			}).catch(function (err) {
				console.warn('Error in getPlayersInfo', err)
			})
		}
	}

, nil = null;

module.exports = helpers;
