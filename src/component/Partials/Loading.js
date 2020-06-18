import * as React from 'react';
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';

export const Loading = ({width, height, active}) => {

    const [size, setSize] = useState({
        width: '100px',
        height: '100px',
    });

    useEffect(() => {
        if (width) setSize({...size, width});
        if (height) setSize({...size, height});

    }, []);

    const styles = {
        width: size.width,
        height: size.height,
        backgroundSize: size.width + ' ' + size.height,
        display: active ? 'block' : 'none'
    };

    return (
        <div className="modal-loading" style={styles}/>
    );
};

Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    active: PropTypes.bool.isRequired
};