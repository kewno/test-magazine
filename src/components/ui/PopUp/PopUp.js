import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Checkout from './Checkout/Checkout';
import EmptyPopUp from './EmptyPopUp/EmptyPopUp';
import Information from './Information/Information';
import './pop-up.scss';
const containerPopUp = document.querySelector('#pop-up')

const PopUp = ({type, text, status, toggle, src, name, price, reviews, options, ...props}) => {
    //debugger 
    let closePopUp = (e) => {
        if (e.target.className == "pop-up__wrap") {
            return toggle(false)
        }
    }
    let [selectedTab, setActiveTab] = useState('description');
    const element = document.createElement('div')
    {status ? element.className = 'pop-up__wrap' : element.className = 'pop-up__wrap_close'}
    element.onclick = closePopUp
    
    useEffect(() => {
        containerPopUp.appendChild(element)

        return () => {
            containerPopUp.removeChild(element)
        };
    });
    
    return (
        createPortal(<div className='pop-up'>
                        <div className='pop-up__header'>
                            <p className='pop-up__text'>{text}</p>
                            <img className='pop-up__picture' onClick={() => toggle(false)} src={require('../../../img/close.png')}/>
                        </div>
                        {/* <EmptyPopUp type={'basket'} src='basket-big.png'>{'В корзине ничего нет'}</EmptyPopUp> */}
                        {/* <EmptyPopUp type={'marker'} src='check-marker.png'>{'Заказ успешно создан'}</EmptyPopUp> */}
                        {/* <Checkout/> */}
                        {/* {type === 'information' ? <Information selectedTab={selectedTab} setActiveTab={setActiveTab}/> : null} */}
                        <Information
                            name={name}
                            price={price}
                            src={src}
                            reviews={reviews}
                            options={options} 
                            selectedTab={selectedTab} 
                            setActiveTab={setActiveTab}/>
                    </div>, element)
        
    )

}


export default PopUp