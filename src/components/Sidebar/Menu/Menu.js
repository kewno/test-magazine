import React from 'react';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({items, active, ...props}) => {
    //let i = 1;
    //debugger
    return (
        <ul className='menu'>
            {items.map(el => {
                return <MenuElem 
                            key={el.id} 
                            id={el.id} 
                            //func={setActiveSubcategory} 
                            active={active}
                            >{el.name}</MenuElem>
            })}
        </ul>
    )
}


export default Menu