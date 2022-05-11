import React from 'react';
//import { useDispatch } from 'react-redux';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({categorys, active, ...props}) => {
    //let arr = window.location.pathname.split('/')
    //debugger
    //let path = arr[1];
    return (
        <ul className='main-menu'>
            {categorys.map(el => {
                return <MenuElem key={el.id} href={`/${el.id}/100`} active={active}>{el.name}</MenuElem>
            })}
        </ul>
    )
}


export default Menu