import React from 'react';
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';



const Header = () => {
    return (
        <div className='header'>
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu />
            </div>
            <Basket srcBasket={'../../img/basket.png'}/>
            {/* <img className='headerbasket' src={require('../../img/basket.png')}/> */}
        </div>
    )
}


export default Header