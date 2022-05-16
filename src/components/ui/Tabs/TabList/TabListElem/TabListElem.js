import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const TabListElem = ({name, title, changeTab, selectedTab, children, ...props}) => {    
    //debugger
    //changeTab('description')
    //changeTab('reviews')
    const linkClass = (selected) => {
        const c = 'container-tab__elem'
        return selected ? `${c} ${c}_active` : c
    }

    let handleClick = (name) => {
        //console.log(name)
        return changeTab(name)
    }
    //handleClick('description')
    let params = useParams();

    return (
        <NavLink
            to={`${params.category}/${params.subcategory}/${name}`} //`${params.category}/${params.subcategory}/${name}`
            className={linkClass(name === selectedTab)}
            onClick={() => {
                handleClick(name)
            }}
            >
            {title}
        </NavLink>
    )
}
// onClick={() => { 
//     debugger 
//     return changeTab(name)}}

export default TabListElem