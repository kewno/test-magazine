import React from 'react';
//import { useDispatch } from 'react-redux';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({categorys, active, setActiveCategory, ...props}) => {
    return (
        <ul className='main-menu'>
            {categorys.map(el => {
                return <MenuElem key={el.id} id={el.id} href={'/'} func={setActiveCategory} active={el.id == active}>{el.name}</MenuElem>
            })}
        </ul>
    )
}


export default Menu