/**
 * Created by sonnguyent1 on 09/08/2016.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return (<div>Hello React Program !!!!!</div>);
    }
})

ReactDOM.render(<HelloWorld />, document.getElementById('app'));