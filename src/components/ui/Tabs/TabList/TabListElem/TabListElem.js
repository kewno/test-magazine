import React from 'react';
import { NavLink } from 'react-router-dom';

const TabListElem = ({name, title, changeTab, selectedTab, children, ...props}) => {    
    const linkClass = selected => {
        const c = 'container-tab__elem'
        return selected ? `${c} ${c}_active` : c
    }

    return (
        <NavLink
            to={name}
            className={linkClass(name === selectedTab)}
            onClick={() => changeTab(name)}
            >
            {title}
        </NavLink>
    )
}


export default TabListElem