import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/mainStyle.scss';
import Content from './Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import {setActiveCategory} from '../../redux/mainReducer'
import { useParams, Navigate } from 'react-router-dom';

const MainPage = () => {
    let params = useParams();
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(params)
    }, [params]);
    //debugger
    let startCategory = useSelector((state) => state.main.categorys[0])
    //startCategory.subcategory[0].id `/${startCategory.id}/${startCategory.id}`
    return (
        <div className='container'>
             {params.category && params.subcategory ? null : <Navigate to={`/14/15`} />} 
            <Header activeCategory={params.category}/>
            <div className='container__wrap'>
                <Sidebar activeCategory={params.category}/>
                <Content />
            </div>
        </div>
    )
}


export default MainPage