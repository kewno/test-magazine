import React from 'react';
import ReviewsElem from './ReviewsElem/ReviewsElem';


const Reviews = ({reviews, ...props}) => {
    //debugger
    return (
        <div className='reviews'>
            {reviews.map(el => {
                //debugger
                // return <ReviewsElem src={el.avatar} message={el.text} name={el.author} rating={el.rate}/>
                return <ReviewsElem src={el.avatar} message={el.text} name={el.author}/>
            })}
            {/* <ReviewsElem src={'ava-reviews.png'} message={`Он подходит именно для питья, для утоления жажды. 
                Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. 
                Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.`} name={'Олег Олегов'}/>
            <ReviewsElem src={'ava-reviews.png'} message={`Он подходит именно для питья, для утоления жажды. 
                Этот квас сильногазированный. После вскрытия бутылки газ сохраняется в ней в течении суток. 
                Квас сладкий, послевкусие придаёт небольшую кислинку. Квас тёмного цвета.`} name={'Олег Олегов'}/> */}
        </div>
    )
}


export default Reviews