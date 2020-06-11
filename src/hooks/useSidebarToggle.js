import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {sidebarToggle} from '../redux/actions/global/globalAction';

const useSidebarToggle = () => {
    const active = useSelector(state => state.global.active);
    const dispatch = useDispatch();

    const setActive = (active) => {
        dispatch(sidebarToggle(active));
    };

    return [active, setActive];
};

export default useSidebarToggle