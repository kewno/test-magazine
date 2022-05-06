import React from 'react';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({items, active, ...props}) => {
    //let activeLink = 
    return (
        <ul className='menu'>
            {items.map(el => {
                return <MenuElem key={el.id} active={el.id == active}>{el.name}</MenuElem>
            })}
           {/* <NavLink className={'menu__elem menu__elem_active'} to={'/'}>Стулья</NavLink>
           <NavLink className={'menu__elem'}to={'/'}>Диваны</NavLink>
           <NavLink className={'menu__elem'}to={'/'}>Столы</NavLink> */}
        </ul>
    )
}


export default Menu