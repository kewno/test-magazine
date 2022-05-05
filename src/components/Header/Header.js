import React from 'react';
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';



const Header = ({coll = 15, elemMenu, ...props}) => {
    return (
        <div className='header'>
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu elemMenu={elemMenu}/>
            </div>
            <Basket coll={coll}/>
        </div>
    )
}


export default Header