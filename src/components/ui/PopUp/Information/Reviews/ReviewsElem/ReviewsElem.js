import React from 'react';
import Stars from '../../../../Stars/Stars';


const ReviewsElem = ({src, name, message, collSelected = 3, ...props}) => {
    
   // let [collSelected, setCollSelected] = useState(0);
    //let [collSelectedEnter, setCollSelectedEnter] = useState(0);

    return (
        <div className='reviews-elem'>
            <img className='reviews-elem__picture' src={src}/>
            <div className='wrap-all-message'>
                <div className='wrap-name-stars'>
                    <h3 className='wrap-name-stars__name'>{name}</h3>
                    <div className='wrap-name-stars__stars'>
                        <Stars collSelected={collSelected} 
                            //setCollSelected={setCollSelected}
                            //collSelectedEnter={collSelectedEnter} 
                            //setCollSelectedEnter={setCollSelectedEnter}
                        />
                    </div>
                </div>
                <p className='wrap-text-stars__message'>{message}</p>
            </div>
        </div>
    )
}


export default ReviewsElem