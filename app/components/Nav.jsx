var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Time App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'Bold'}}>Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        <span>Created by <a href="http://www.mead.io" target="_blank">Dhrin Anan</a></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Nav;