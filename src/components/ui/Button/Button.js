import React from 'react';
import {NavLink} from "react-router-dom"


const Button = (props) => {
    return (
        <NavLink className={`${props.class}`} to={`/${props.path}`}>{props.text}</NavLink>
    )
}


export default Button