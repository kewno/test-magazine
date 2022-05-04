import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './pop-up.scss';
const containerPopUp = document.querySelector('#pop-up')

const PopUp = ({text, status, ...props}) => {
    
    const element = document.createElement('div')
    
    useEffect(() => {
        containerPopUp.appendChild(element)

        // return () => {
        //     containerPopUp.removeChild(element)
        // };
    });
    
    return (
        createPortal(props.children, element)
    )

}


export default PopUp