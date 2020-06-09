import * as React from 'react';
import PropTypes from 'prop-types';

export const SidebarGroup = ({title, children}) => {
    return (
        <section className="sidebar-group">
            <h5 className="sidebar-heading">
                {title}
            </h5>
            <ul className="sidebar-items">
                {children}
            </ul>
        </section>
    );
};

SidebarGroup.propTypes = {
    title: PropTypes.string.isRequired,
};