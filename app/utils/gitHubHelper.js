/**
 * Created by sonnguyent1 on 15/08/2016.
 */
var axios = require('axios');

var CLIENT_ID = '70a3a5fef52af38118fb';
var SECRET_ID = 'b0aee373a4bf7a9d263914ac6b58e49d08c8dec1';
var params = '?client_id=' + CLIENT_ID + '&client_secret=' + SECRET_ID;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + params);
}

function getRepos(username) {
    // fetch repos on username
    return axios.get('https://api.github.com/users/' + username + '/repos' + params+ '&per_page=100');

}

function getTotalStars(repos) {
    // calculate all stars that user has
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count;
    }, 0);

}

function getPlayerData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            };
        });
}

function calculateScore(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
}


module.exports = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username);
        })).then(function (info) {
            return info.map(function(user) {
                return user.data;
            });
        }).catch(function (err) {
            console.error('Error in getPlayersInfo', err);
        });
    },
    battle: function(players) {
        var playerOneData = getPlayerData(players[0]);
        var playerTwoData = getPlayerData(players[1]);
        return axios.all([playerOneData, playerTwoData])
            .then(calculateScore);
    }
};