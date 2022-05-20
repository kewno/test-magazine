import React from 'react';

const Star = ({id, active, setCollSelected, ...props}) => {
    let image = active ? 'star-a.png' : 'star.png'
    //`../../../img/${image}` setCollSelected
    let handleEnter = () => {
        setCollSelected(id);
    }
    return (
        <div className='stars__star' onMouseEnter={handleEnter}>
            <img src={require(`../../../../img/${image}`)}/>
        </div>
    )
}


export default Star