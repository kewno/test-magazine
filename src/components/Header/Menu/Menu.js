import React from 'react';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({elemMenu, ...props}) => {
    return (
        <ul className='main-menu'>
           <MenuElem active href={'/'}>Электроприборы</MenuElem>
           <MenuElem href={'/'}>Мебель</MenuElem>
        </ul>
    )
}


export default Menu