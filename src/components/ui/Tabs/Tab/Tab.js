import React from 'react';
import { NavLink } from 'react-router-dom';

const Tab = ({name, href, active, ...props}) => {
    let elemClass = active ? 'container-tab__elem container-tab__elem_active' : 'container-tab__elem'
    return (
        <div>
            <NavLink className={elemClass}to={href}>{name}</NavLink>
        </div>
    )
}


export default Tab