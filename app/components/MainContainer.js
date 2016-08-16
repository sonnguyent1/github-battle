/**
 * Created by sonnguyent1 on 16/08/2016.
 */
var React = require('react');
var transparentBg = require('../styles').transparentBg;


module.exports = function (props) {
    return (
        <div className="jumbotron col-sm-12 text-center"
             style={transparentBg}>{props.children}</div>
    );
}