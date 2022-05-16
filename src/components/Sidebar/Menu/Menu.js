import React from 'react';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({items, active, ...props}) => {
    return (
        <ul className='menu'>
            {items.map(el => {
                //debugger
                return <MenuElem 
                            key={el.id} 
                            id={el.id}
                            href={`/${active}/${el.id}`}
                            //func={setActiveSubcategory} 
                            active={active}
                            >{el.name}</MenuElem>
            })}
        </ul>
    )
}


export default Menu