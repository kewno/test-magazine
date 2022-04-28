import React from 'react';

// onerror/onload
const Picture = (props) => {
    debugger
    let i = props.src;
    return (
        // <div className='123'> 
            <img src={require(i)}/>
        //</div>
    )
}


export default Picture