import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/mainStyle.scss';
import Content from './Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import {setDataThunkCreator, toggleOrderProducts} from '../../redux/mainReducer'

const MainPage = ({...props}) => {
    let params = useParams();
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDataThunkCreator())
    }, []);
    let startCategory = useSelector((state) => state.main.categorys[0])
    let categorys = useSelector((state) => state.main.categorys)
    
    let activeCategory = categorys.filter(el => {
        if (el.id == Number(params.category)) return el.id
    })
    //console.log(activeCategory[0].subcategorys[0].id)
    //debugger
    //let startSabCategory = startCategory.subcategorys[0].id
    //startCategory.subcategory[0].id `/${startCategory.id}/${startCategory.id}`'/14/15'
    //<Navigate to={`/${startCategory.id}/${startCategory.subcategorys[0].id}`} />}
    
    return (
        <div className='container'>
            {params.category ? null : <Navigate to={`/${startCategory.id}`} />}
            {!(params.subcategory) && (params.category) && !(params.category && params.subcategory) ? <Navigate to={`/${params.category}/${activeCategory[0].subcategorys[0].id}`} /> : null}
            
            <Header activeCategory={params.category} />
            <div className='container__wrap'>
                {/* <Sidebar activeCategory={params.category} /> */}
                <Sidebar activeCategory={params.category} />
                <Content subcategory={params.subcategory} toggleOrderProducts={toggleOrderProducts}/>
            </div>
        </div>
    )
}


export default MainPage