import * as React from 'react';
import {useState} from "react";
import PropTypes from 'prop-types';

export const CloseRoomVerify = ({closeExtension}) => {

    const [close, setClose] = useState(false);

    const handleClick = (e) => {
        const verify = e.target.name === 'yes';
        setClose(verify);
        closeExtension(false, verify);
    };

    return (
        <>
            <button className="btn btn-outline-success btn-sm mr-2 close-room-yes" name="yes" onClick={handleClick}>Yes</button>
            <button className="btn btn-outline-danger btn-sm close-room-no" name="no" onClick={handleClick}>No</button>
        </>
    );
};

CloseRoomVerify.propTypes = {
    closeExtension: PropTypes.func.isRequired
};