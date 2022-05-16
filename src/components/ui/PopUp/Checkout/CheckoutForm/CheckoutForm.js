import React, {useState} from 'react';
import Input from '../../../Input/Input'

const CheckoutForm = ({...props}) => {
    let [textName, setTextName] = useState('')
    let [textPhone, setTextPhone] = useState('')
    let [textAddress, setTextAddress] = useState('')
    return (
        <div className='checkout-form'>
            <div className='wrap-name-phone'>
                <div className='wrap-name-phone__wrap-name'>
                    <Input type='text' value={textName} onChange={e => setTextName(e.target.value)} {...props}>Имя</Input>
                </div>
                <div className='wrap-name-phone__wrap-phone'>
                    <Input type='phone' value={textPhone} onChange={e => setTextPhone(e.target.value)} {...props}>Телефон</Input>
                </div>
            </div>
            <div className='checkout-form__wrap-address'>
                <Input type='text' value={textAddress} onChange={e => setTextAddress(e.target.value)} {...props}>Полный адрес</Input>
            </div>
        </div>
    )
}


export default CheckoutForm