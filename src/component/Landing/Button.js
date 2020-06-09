import React from 'react';
import {Link} from "react-router-dom";

const Button = ({children, to}) => (
    <Link to={to ? to : '#'} className="btn draw-border">
        {children}
    </Link>
);

export default Button;