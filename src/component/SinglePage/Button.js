import React from 'react';
import {Link} from "react-router-dom";

const Button = ({value, to}) => (
    <Link to={to} className="btn draw-border">
        {value}
    </Link>
);

export default Button;