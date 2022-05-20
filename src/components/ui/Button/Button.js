import React from 'react';
import {NavLink} from "react-router-dom"
import './button.scss';

const Button = ({id, href, disable, add, children, func, ...attrs}) => {
    let buttonClass = 'button';
    if (disable) {
        buttonClass = 'button button_disable';
    } else if (add) {
        buttonClass = 'button button_add';
    }
    return (
        <div>
            {href ?
                <NavLink onClick={func} className={`${buttonClass}`} to={`/${href}`}>{children}</NavLink>
                :
                <button onClick={() => func(id)} className={`${buttonClass}`}>{children}</button>
            }
        </div>
    )
}


export default Button