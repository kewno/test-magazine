import React from 'react';

// onerror/onload
const Picture = ({src, ...props}) => {
    
    return (
        <img src={require(src)}/>
    )
}


export default Picture