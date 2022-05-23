import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProductThunkCreator } from '../../../redux/mainReducer';
import Checkout from './Checkout/Checkout';
import EmptyPopUp from './EmptyPopUp/EmptyPopUp';
import Information from './Information/Information';
import './pop-up.scss';
const containerPopUp = document.querySelector('#root')

const PopUp = ({type, text, status, toggle, src, name, price, reviews, options, idProduct, ...props}) => {
    //debugger
    let closePopUp = (e) => {
        if (e.target.className == "pop-up__wrap") {
            return toggle(false)
        }
    }

    let dispatch = useDispatch()
    
    let [selectedTab, setActiveTab] = useState('description');
    const element = document.createElement('div')
    {status ? element.className = 'pop-up__wrap' : element.className = 'pop-up__wrap_close'}
    element.onclick = closePopUp
    let idActiveproduct = useSelector((state) => state.main.activeProduct.id)

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
                        {/* <EmptyPopUp type={'basket'} src='basket-big.png'>{'В корзине ничего нет'}</EmptyPopUp> empty-basket*/}
                        {/* <EmptyPopUp type={'marker'} src='check-marker.png'>{'Заказ успешно создан'}</EmptyPopUp> */}
                        {type == "empty-basket" ?
                            <EmptyPopUp type={'basket'} src='basket-big.png'>{'В корзине ничего нет'}</EmptyPopUp>
                        :
                        null}
                        {type == "basket" ?
                            <Checkout/>
                        :
                        null}
                        {type == "information" ?
                            <Information
                                // name={name}
                                // price={price}
                                // src={src}
                                // reviews={reviews}
                                // options={options} 
                                selectedTab={selectedTab} 
                                setActiveTab={setActiveTab}/>
                            :
                        null}
                    </div>, element)
        
    )

}


export default PopUp