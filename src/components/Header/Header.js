import React from 'react';
import {connect, useDispatch} from "react-redux";
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';
import {setDataThunkCreator} from '../../redux/mainReducer'


const Header = ({coll = 15, elemMenu, categorys, ...props}) => {
    const dispatch = useDispatch();
    dispatch(setDataThunkCreator())
    return (
        <div className='header'>
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu categorys={categorys}/>
            </div>
            <Basket coll={coll}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categorys: state.main.categorys
    }
}

export default connect(mapStateToProps,{
    setDataThunkCreator
})(Header);
//export default Header