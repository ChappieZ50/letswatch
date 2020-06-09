import * as React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


export const Button = ({to, children, className}) => {
    return (
        <Link to={to ? to : '#'} className={"btn btn-dark " + (className && className)}>
            {children}
        </Link>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    className:PropTypes.string
};