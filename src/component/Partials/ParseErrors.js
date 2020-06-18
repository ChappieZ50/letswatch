import * as React from 'react';

import PropTypes from 'prop-types';

export const ParseErrors = ({errors}) => {
    return (
        <>
            {
                errors.length > 0 ? errors.map((value, key) => {
                    return (
                        <div className="error-field text-danger" key={key}>{value}</div>
                    )
                }) : ''
            }
        </>
    );
};

ParseErrors.propTypes = {
    errors: PropTypes.array
};