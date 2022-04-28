import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/mainStyle.scss';
import Content from './Content/Content';

const MainPage = () => {
    return (
        <div className='container'>
            <Header/>
            <div className='container__wrap'>
                <Sidebar/>
                <Content/>
            </div>
        </div>
    )
}


export default MainPage