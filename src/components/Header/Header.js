import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';
import {setDataThunkCreator} from '../../redux/mainReducer'
import {Navigate} from "react-router-dom";

const Header = ({coll = 15, ...props}) => {
    let numberCategory;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDataThunkCreator())
    }, []);
    let [a, pathCategory, pathSubCategory] = window.location.pathname.split('/')
    useEffect(() => {
        
        numberCategory = pathCategory
    }, [numberCategory]);

    const categorys = useSelector((state) => state.main.categorys)
    //const activeCategory = useSelector((state) => state.main.activeCategory)

    return (
        <div className='header'>
            {pathCategory && pathSubCategory ? null : <Navigate to="/14/12" />}
            {/* <Redirect/> */}
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu 
                    categorys={categorys} 
                    active={numberCategory}
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