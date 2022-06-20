import React from 'react';
import Star from './Star/Star';
import './stars.scss';

const Stars = ({collSelected, setCollSelected, collSelectedEnter, setCollSelectedEnter, ...props}) => {
    let selected = [1,2,3,4,5];

    let handleLeave = () => {
        if (setCollSelected != null) setCollSelected(0);
    }

    let active;
    if (collSelected != 0) {
        active = collSelected
    } else {
        active = collSelectedEnter
    }

    return (
        <div className='stars' onMouseLeave={handleLeave}>
            {selected.map(el => {
                return <Star key={el} id={el} setCollSelected={setCollSelected}
                setCollSelectedEnter={setCollSelectedEnter}
                active={el <= active ? true : null}/>
            })}
        </div>
    )
}


export default Stars