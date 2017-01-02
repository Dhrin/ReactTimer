var React = require('react');
var Clock = require('Clock');

var Timer = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Timer</h1>
            <Clock totalSeconds={129} />
        </div>
    );
};

module.exports = Timer;