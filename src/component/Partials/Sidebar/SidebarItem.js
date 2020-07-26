import * as React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const SidebarItem = withRouter(({to, children, icon, location}) => {
    const active = () => {
        return location.pathname === to ? 'active' : '';
    };

    return (
        <li className={active()}>
            <NavLink exact activeClassName={'active'} to={to}>
                {
                    icon ? <span><FontAwesomeIcon icon={icon}/></span> : ''
                }
                {children}
            </NavLink>
        </li>
    );
});

SidebarItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.object
};