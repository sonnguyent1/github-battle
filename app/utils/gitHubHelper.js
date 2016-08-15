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
    }
};