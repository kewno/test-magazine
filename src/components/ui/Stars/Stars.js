import React from 'react';
import Star from './Star/Star';
import './stars.scss';

const Stars = ({collSelected, setCollSelected, ...props}) => {
    let selected = [1,2,3,4,5];

    let handleLeave = () => {
        setCollSelected(0);
    }

    return (
        <div className='stars' onMouseLeave={handleLeave}>
            {selected.map(el => {
                return <Star key={el} id={el} setCollSelected={setCollSelected} active={el <= collSelected ? true : null}/>
            })}
        </div>
    )
}


export default Stars