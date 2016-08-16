/**
 * Created by sonnguyent1 on 15/08/2016.
 */
var React = require('react');
var Link = require('react-router').Link;

var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');


var StartOver = function() {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
                <button className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    );
};

module.exports = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool.isRequired,
        playersInfo: React.PropTypes.array.isRequired,
        scores: React.PropTypes.array.isRequired
    },

    render: function() {

        if (this.props.isLoading === true) {
            return <Loading speed={100} text="One Moment" />;
        }

        if (this.props.scores[0] === this.props.scores[1]) {
            return (
            <MainContainer>
                <h1>It's Tie!</h1>
                <StartOver/>
            </MainContainer>
            );
        }

        var winnerIndex = this.props.scores[0] > this.props.scores[1]
            ? 0 : 1;
        var loserIndex = winnerIndex === 0 ? 1 : 0;
        return (
            <MainContainer>
                <h1>Results</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Winner">
                        <UserDetails
                            score={this.props.scores[winnerIndex]}
                            info={this.props.playersInfo[winnerIndex]}
                        />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Loser">
                        <UserDetails
                            score={this.props.scores[loserIndex]}
                            info={this.props.playersInfo[loserIndex]}
                        />
                    </UserDetailsWrapper>
                </div>
                <StartOver/>
            </MainContainer>
        );
    }
});