import React from 'react';
import Icon from '../Icon/Icon';
import MainLogo from '../MainLogo/MainLogo';
import Menu from '../Menu/Menu';



const Header = () => {
    return (
        <div className='header'>
           <MainLogo/>
           <Menu/>
           <Icon/>
        </div>
    )
}


export default Header