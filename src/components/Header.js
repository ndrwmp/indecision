import React from 'react';

// set defaultProps after creating the component
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {/* only create an h2 for the subtitle if the subtitle exists */}
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: "Indec1sion"
};

export default Header;