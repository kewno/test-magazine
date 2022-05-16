import React from 'react';
//import { useDispatch } from 'react-redux';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({categorys, active, ...props}) => {
    //debugger
    return (
        <ul className='main-menu'>
            {categorys.map(el => {
                //debugger
                return <MenuElem key={el.id} href={`/${el.id}/${el.subcategorys[0].id}`} active={active}>{el.name}</MenuElem>
            })}
        </ul>
    )
}


export default Menu