import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav className={`navbar bg-${props.mode === 'light' ? ('light') : ('dark')} navbar-expand-lg`}>
            <div className="container-fluid">
                <span className={`text-${(props.mode === 'dark' ? ('light') : ('dark'))} navbar-brand mb-0 h1`}>{props.title}</span>
            </div>

        


            <div className="form-check form-switch">
                <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label htmlFor="flexSwitchCheckChecked" className={`text-${props.mode === 'light' ? ('dark') : ('light')}`}>Enable {props.mode === 'dark' ? ('light') : ('dark')} Mode</label>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title : "TextUtils"
}

export default Navbar;