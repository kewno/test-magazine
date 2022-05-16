import React, { useEffect }  from 'react';
import '../../styles/sidebarStyle.scss';
import Menu from './Menu/Menu';
import {useSelector} from "react-redux";
import { setActiveSubcategory } from '../../redux/mainReducer';


const Sidebar = ({activeCategory, ...props}) => {
    let activeCategorys = useSelector((state) => state.main.categorys.filter( el => el.id == activeCategory))
        //let categorys = useSelector((state) => state.main.categorys)
    //debugger
    return (
        <div className='sidebar'>
           {activeCategory ? <Menu 
                items={activeCategorys[0].subcategorys} 
                active={activeCategory}
            />
            :
            null
        }
        </div>
    )
}


export default Sidebar