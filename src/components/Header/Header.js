import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';
import {setDataThunkCreator} from '../../redux/mainReducer'

const Header = ({activeCategory, coll = 15, ...props}) => {
    // let numberCategory;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDataThunkCreator())
    }, []);

    const categorys = useSelector((state) => state.main.categorys)
    return (
        <div className='header'>
            {/* <Redirect/> */}
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu 
                    categorys={categorys} 
                    active={activeCategory}
                />
            </div>
            <Basket coll={coll}/>
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