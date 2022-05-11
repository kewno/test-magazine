import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/mainStyle.scss';
import Content from './Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import {setActiveCategory} from '../../redux/mainReducer'

const MainPage = () => {
    let arr = window.location.pathname.split('/')

    let dispatch = useDispatch()
    useEffect(() => {
        //dispatch(setActiveCategory(arr[1]))
        console.log(window.location.pathname)
        arr = window.location.pathname.split('/')
    }, [window.location.pathname]);
    //let categorys = useSelector((state) => state.main.activeCategory)
    return (
        <div className='container'>
            <Header/>
            <div className='container__wrap'>
                <Sidebar activeCategory={arr[1]}/>
                <Content />
            </div>
        </div>
    )
}


export default MainPage