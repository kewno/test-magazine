import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './pop-up.scss';
const containerPopUp = document.querySelector('#pop-up')

const PopUp = ({text, status, close, ...props}) => {
    debugger
    const element = document.createElement('div')
    status ? element.className = 'pop-up__wrap' : element.className = 'pop-up__wrap_close'
    
    useEffect(() => {
        containerPopUp.appendChild(element)

        return () => {
            containerPopUp.removeChild(element)
        };
    });
    
    return (
        createPortal(props.children, element)
    )

}


export default PopUp