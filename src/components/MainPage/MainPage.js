import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/mainStyle.scss';
import Content from './Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import {setActiveCategory} from '../../redux/mainReducer'
import { useParams, Navigate } from 'react-router-dom';
import {setDataThunkCreator} from '../../redux/mainReducer'

const MainPage = () => {
    let params = useParams();
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDataThunkCreator())
    }, []);
    let startCategory = useSelector((state) => state.main.categorys[0])
    let categorys = useSelector((state) => state.main.categorys[0])
    //debugger
    //let startSabCategory = startCategory.subcategorys[0].id
    //debugger
    //debugger
    //startCategory.subcategory[0].id `/${startCategory.id}/${startCategory.id}`'/14/15'
    //debugger
    //<Navigate to={`/${startCategory.id}/${startCategory.subcategorys[0].id}`} />} 
    return (
        <div className='container'>
            {/* <Navigate to={`/14/15`} /> */}
             {params.category && params.subcategory ? null : <Navigate to={`/14/15`} />} 
            <Header activeCategory={params.category} />
            <div className='container__wrap'>
                <Sidebar activeCategory={params.category} />
                <Content subcategory={params.subcategory}/>
            </div>
        </div>
    )
}


export default MainPage