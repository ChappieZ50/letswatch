import * as React from 'react';
import PropTypes from 'prop-types';


export const Radio = ({value, name, children, handleChange, id, defaultChecked}) => {

    return (
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id={"customRadioInline" + id} name={name} className="custom-control-input" value={value}
                   defaultChecked={defaultChecked ? defaultChecked : false} onChange={handleChange}/>
            <label className="custom-control-label" htmlFor={"customRadioInline" + id}>
                {children}
            </label>
        </div>
    );
};

Radio.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    defaultChecked: PropTypes.bool
};