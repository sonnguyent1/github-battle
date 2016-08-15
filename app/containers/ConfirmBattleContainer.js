/**
 * Created by sonnguyent1 on 15/08/2016.
 */
var React = require('react');

var ConfirmBattle = require('../components/ConfirmBattle');
var gitHubHelper = require('../utils/gitHubHelper');

module.exports = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        console.log('getInitialState');
        return {
            isLoading: true,
            playersInfo: []
        }
    },

    componentWillMount: function () {
        console.log('componentWillMount');
    },

    componentDidMount: function () {
        console.log('componentDidMount');
        var query = this.props.location.query;
        gitHubHelper.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
            this.setState({
                isLoading: false,
                playersInfo: players
            })
        }.bind(this));
    },

    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },

    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/result',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },
    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle}
            />
        );
    }
});