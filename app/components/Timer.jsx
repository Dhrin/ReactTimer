var React = require('react');
var Clock = require('Clock');

var Timer = (props) => {
    return (
        <div>
            <h1 className="page-title">Timer App</h1>
            <Clock totalSeconds={129} />
        </div>
    );
};

module.exports = Timer;