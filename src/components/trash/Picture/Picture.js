import React from 'react';


const Picture = (props) => {
    return (
        <div className='picture'>
            <img src={props.path} alt={props.name}/>
        </div>
    )
}


export default Picture