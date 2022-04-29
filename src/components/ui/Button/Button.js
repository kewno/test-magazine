import React from 'react';
import {NavLink} from "react-router-dom"


const Button = ({href, disable, children, path, ...props}) => {
    let buttonClass = 'container__wrap-button__button';
    if (disable) {
        buttonClass = 'container__wrap-button__button__disable';
    }
    return (
        <div>
            {href ?
                <NavLink className={`${buttonClass}`} to={`/${path}`}>{children}</NavLink>
                :
                <button className={`${buttonClass}`}>{children}</button>
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