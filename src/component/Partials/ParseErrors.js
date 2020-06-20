import * as React from 'react';

import PropTypes from 'prop-types';

export const ParseErrors = ({errors}) => {
   
    return (
        <>
            {
                Object.entries(errors).map(([key, value]) => (
                    <div className="error-field text-danger" key={key}>{value}</div>
                ))
            }
        </>
    );
};

ParseErrors.propTypes = {
    errors: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};