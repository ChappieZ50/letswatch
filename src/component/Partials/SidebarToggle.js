import * as React from 'react';

import Burger from '@animated-burgers/burger-squeeze';
import useSidebarToggle from "../../hooks/useSidebarToggle";

import '@animated-burgers/burger-squeeze/dist/styles.css';

const SidebarToggle = () => {

    const [active,setActive] = useSidebarToggle();

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <Burger onClick={handleClick} isOpen={active}/>
    );
};


export default SidebarToggle;