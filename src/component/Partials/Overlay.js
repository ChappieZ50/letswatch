import * as React from 'react';

export const Overlay = ({active}) => (
    <div className={"triggered-overlay" + (active ? " triggered " : "")}/>
);
