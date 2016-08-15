/**
 * Created by sonnguyent1 on 15/08/2016.
 */
var React = require('react');
var Link = require('react-router').Link;

var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');


function puke(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

module.exports = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool.isRequired,
        playersInfo: React.PropTypes.array.isRequired,
        onInitiateBattle: React.PropTypes.func.isRequired
    },

    render: function() {
        return this.props.isLoading === true
            ? <p>LOADING!</p>
            : (<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Player One">
                        <UserDetails info={this.props.playersInfo[0]}/>
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player Two">
                        <UserDetails info={this.props.playersInfo[1]}/>
                    </UserDetailsWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={styles.space}>
                        <button type="button"
                                className="btn btn-lg btn-success"
                                onClick={this.props.onInitiateBattle}>
                            Initiate Battle!
                        </button>
                    </div>
                    <div className="col-sm-12" style={styles.space}>
                        <Link to="/playerOne">
                            <button className="btn btn-lg btn-danger">Reselect Players</button>
                        </Link>
                    </div>
                </div>
              </div>);
    }
});