import React from 'react';
import MenuElem from './MenuElem/MenuElem';


const Menu = ({categorys, ...props}) => {
    return (
        <ul className='main-menu'>
            {categorys.map(el => {
                return <MenuElem href={'/'}>{el.name}</MenuElem>
            })}
           {/* <MenuElem active href={'/'}>Электроприборы</MenuElem> */}
           {/* <MenuElem href={'/'}>Мебель</MenuElem> */}
        </ul>
    )
}


export default Menu