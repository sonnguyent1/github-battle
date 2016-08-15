/**
 * Created by sonnguyent1 on 15/08/2016.
 */
var React = require('react');
var Results = require('../components/Results');
var gitHubHelper = require('../utils/gitHubHelper');


module.exports = React.createClass({

    getInitialState: function () {
        return {
            isLoading: true,
            score: []
        };
    },

    componentDidMount: function() {
        gitHubHelper.battle(this.props.location.state.playersInfo)
            .then(function(scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                });
            }.bind(this));
    },

    render: function () {
        return <Result isLoading={this.state.isLoading}
                       playersInfo={this.props.location.state.playersInfo}
                       scores={this.state.scores}/>;
    }
});