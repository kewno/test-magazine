import React, { useEffect }  from 'react';
import '../../styles/sidebarStyle.scss';
import Menu from './Menu/Menu';
import {useSelector} from "react-redux";
import { setActiveSubcategory } from '../../redux/mainReducer';


const Sidebar = ({activeCategory, ...props}) => {

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