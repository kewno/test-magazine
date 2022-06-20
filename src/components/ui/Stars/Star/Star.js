import React from 'react';

const Star = ({id, active, setCollSelected, setCollSelectedEnter, ...props}) => {
    let image = active ? 'star-a.png' : 'star.png'
    //`../../../img/${image}` setCollSelected
    let handleEnter = () => {
        if (setCollSelected != null) setCollSelected(id);
    }
    let handleClick = () => {
        if (setCollSelectedEnter != null) setCollSelectedEnter(id);
    }
    return (
        <div className='stars__star' onMouseEnter={handleEnter} onClick={handleClick}>
            <img src={require(`../../../../img/${image}`)}/>
        </div>
    )
}


export default Star