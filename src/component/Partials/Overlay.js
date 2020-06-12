import * as React from 'react';
import PropTypes from "prop-types";

export const Overlay = ({active}) => (
    <div className={"triggered-overlay" + (active ? " triggered " : "")}/>
);

Overlay.propTypes = {
    active:PropTypes.bool,
};
