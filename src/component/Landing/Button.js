import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const Button = ({children, to, className, onClick}) => (
    <Link to={to ? to : '#'} className={"btn draw-border " + (className ? className : "")} onClick={onClick}>
        {children}
    </Link>
);


Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
};