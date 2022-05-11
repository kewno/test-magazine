import React, { useEffect }  from 'react';
import '../../styles/sidebarStyle.scss';
import Menu from './Menu/Menu';
import {useSelector} from "react-redux";
import { setActiveSubcategory } from '../../redux/mainReducer';


const Sidebar = ({activeCategory, ...props}) => {
    // let numberCategory, numberSubCategory;
    // let arr = window.location.pathname.split('/')
    // useEffect(() => {
        
    //     numberCategory = arr[1]
    //     numberSubCategory = arr[2]
    // }, [arr]);
    let activeCategorys = useSelector((state) => state.main.categorys[activeCategory])

    return (
        <div className='sidebar'>
           {activeCategorys ? <Menu 
                items={activeCategorys.subcategorys} 
                active={activeCategory}
            />
            :
            null
        }
        </div>
    )
}


export default Sidebar