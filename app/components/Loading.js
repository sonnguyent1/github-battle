/**
 * Created by sonnguyent1 on 16/08/2016.
 */
var React = require('react');
var styles = require('../styles');

module.exports = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        speed: React.PropTypes.number
    },

    getDefaultProps: function() {
      return {
          text: 'Loading',
          speed: 300
      }
    },

    getInitialState: function() {
        return {
            text: this.props.text
        };
    },

    componentDidMount: function() {
        var stopper = this.props.text + '...';
        this.interval = setInterval(function () {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }

        }.bind(this), this.props.speed);
    },

    componentWillUnmount: function() {
        clearInterval(this.interval);
    },

    render: function() {
        return (
            <div style={styles.loading.container}>
                <p style={styles.loading.container}>
                    {this.state.text}
                </p>
            </div>
        );
    }
})

