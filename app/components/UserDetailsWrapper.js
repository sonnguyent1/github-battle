/**
 * Created by sonnguyent1 on 15/08/2016.
 */
var React = require('react');


module.exports = function(props) {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    );
};

