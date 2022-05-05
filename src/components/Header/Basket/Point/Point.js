import React from 'react';


const Point = ({coll, ...props}) => {
    return (
        <div className='basket__point'>
            <span className='basket__point_coll'>{coll}</span>
        </div>
    )
}


export default Point