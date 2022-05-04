import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './pop-up.scss';
const containerPopUp = document.querySelector('#pop-up')

const PopUp = ({text, status, toggle, ...props}) => {
    let closePopUp = (e) => {
        if (e.target.className == "pop-up__wrap") {
            return toggle(false)
        }
    }

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
                    </div>, element)
        
    )

}


export default PopUp