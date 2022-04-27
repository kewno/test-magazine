import React from 'react';
import {NavLink} from "react-router-dom"
import Picture from '../Picture/Picture';


const Button = (props) => {
    return (
        <div className='button'>
           <NavLink to={`/${props.path}`} className='button'>{props.text}</NavLink>
           <Picture/> {/*если кнопка с галочкой*/}
        </div>
    )
}


export default Button