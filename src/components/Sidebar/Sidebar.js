import React from 'react';
import '../../styles/sidebarStyle.scss';
import Menu from './Menu/Menu';
import {useSelector} from "react-redux";


const Sidebar = () => {
    
    //const subcategorys = useSelector((state) => state.main)//categorys[0]
    //const activeSubcategory = useSelector((state) => state.main.activeSubcategory)
    //debugger
    return (
        <div className='sidebar'>
           {/* <Menu items={subcategorys} active={15}/>  */}
        </div>
    )
}


export default Sidebar