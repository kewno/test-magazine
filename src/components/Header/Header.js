import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import MainLogo from './MainLogo/MainLogo';
import '../../styles/headerStyle.scss';
import Menu from './Menu/Menu';
import Basket from './Basket/Basket';
import {setActiveCategory, setDataThunkCreator} from '../../redux/mainReducer'


const Header = ({coll = 15, ...props}) => {
    
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDataThunkCreator())
    }, []);
    const categorys = useSelector((state) => state.main.categorys)
    const activeCategory = useSelector((state) => state.main.activeCategory)
    //debugger
    return (
        <div className='header'>
            <div className='header__wrap-logo-menu'>
                <MainLogo />
                <Menu 
                    categorys={categorys} 
                    active={activeCategory}
                    setActiveCategory={setActiveCategory}
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