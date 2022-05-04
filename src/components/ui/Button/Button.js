import React from 'react';
import {NavLink} from "react-router-dom"
import './button.scss';

const Button = ({href, disable, children, func, ...attrs}) => {
    let buttonClass = 'button';
    if (disable) {
        buttonClass = 'button button_disable';
    }
    return (
        <div>
            {href ?
                <NavLink onClick={() => func()} className={`${buttonClass}`} to={`/${href}`}>{children}</NavLink>
                :
                <button onClick={() => func()} className={`${buttonClass}`}>{children}</button>
            }
        </div>
    )
}


export default Button


// const Button = ({disable, load, ...props}) => {
//     let buttonClass = 'container__wrap-button__button';
//     if (disable) {
//         buttonClass = 'container__wrap-button__button__disable';
//     } else if (load) {
//         buttonClass = 'container__wrap-button__button__load';
//     }
//     return (
//         <div>
//             {props.href ?
//                 <NavLink className={`${buttonClass}`} to={`/${props.path}`}>{props.children}</NavLink>
//                 :
//                 <button className={`${buttonClass}`}>{props.children}</button>
//             }
//         </div>
//     )
// }


// export default Button