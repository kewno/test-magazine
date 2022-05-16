import React, { useEffect, useState } from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';
import {setDataThunkCreator} from '../../redux/mainReducer'
import PopUp from '../ui/PopUp/PopUp';

const Header = ({activeCategory, coll = 15, ...props}) => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setDataThunkCreator())
    // }, []);
    let [checkPopUp, setCheckPopUp] = useState(false);
    let categorys = useSelector((state) => state.main.categorys)
    //let startCategory = useSelector((state) => state.main.categorys.filter( elem => elem.id == el.id))
    return (
        <div className='header'>
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu 
                    categorys={categorys} 
                    active={activeCategory}
                />
            </div>
            <Basket coll={coll} func={setCheckPopUp}/>
            <PopUp toggle={setCheckPopUp} status={checkPopUp} text='Оформить заказ' {...props}/>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         categorys: state.main.categorys
//     }
// }

// export default connect(null,{
//     setDataThunkCreator
// })(Header);
export default Header