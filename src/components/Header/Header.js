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
    
    let idOrderProducts = useSelector((state) => state.main.orderProducts)

    let [checkPopUp, setCheckPopUp] = useState(false);
    let categorys = useSelector((state) => state.main.categorys)
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
            {idOrderProducts.length !== 0 ? 
                <PopUp type={'basket'} toggle={setCheckPopUp} status={checkPopUp} text='Оформить заказ' {...props}/>
                :
                <PopUp type={'empty-basket'} toggle={setCheckPopUp} status={checkPopUp} text='Оформить заказ' {...props}/>
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         categorys: state.main.categorys
//     }
// }

// export default connect(null, {
//     setDataThunkCreator
// })(Header);
export default Header