/**
 * Created by sonnguyent1 on 11/08/2016.
 */
var React = require('react');

var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            username: ''
        }
    },
    handleUpdateUser: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser: function(e) {
        e.preventDefault();
            this.setState({
            username: ''
        });
        if (this.props.routeParams.playerOne) {
            // Go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            // Go to playerTwo
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },
    render: function() {
        return (
            <Prompt
                onUpdateUser={this.handleUpdateUser}
                onSubmitUser={this.handleSubmitUser}
                username={this.state.username}
                header={this.props.route.header} />
        )
    }
});

module.exports = PromptContainer;