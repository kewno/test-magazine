import React, {useState} from 'react';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input'

const CheckoutForm = ({...props}) => {
    let [textName, setTextName] = useState('')
    let [textPhone, setTextPhone] = useState('')
    let [textAddress, setTextAddress] = useState('')
   
    let handleClick = () => {
        
    }

    let [errorTextName, setErrorTextName] = useState('')
    let [errorTextPhone, setErrorTextPhone] = useState('')
    let [errorTextAddress, setErrorTextAddress] = useState('')  

    let bluredName = () => {
        if (!textName) {
            setErrorTextName('Имя обязательно для заполнение') 
        } else {
            setErrorTextName('')
        } 
    }
    let focusedName = () => {
        setErrorTextName('') 
    }

    let bluredPhone = () => {
        if (!textPhone) {
            setErrorTextPhone('Телефон обязателен для заполнения') 
        } else {
            setErrorTextPhone('')
        }
    }
    let focusedPhone = () => {
        setErrorTextPhone('') 
    }

    let bluredAddress = () => {
        if (!textAddress) {
            setErrorTextAddress('Адрес обязателен для заполнения')
        } else {
            setErrorTextAddress('')
        } 
    }
    let focusedAddress = () => {
        setErrorTextAddress('') 
    }
//type='POST' .replace(/[+()]/g, "\\$&")   .replace(/\D/, '')                                                                                 ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
    return (
        <form>
            <div className='checkout-form' onClick={() => handleClick()}>
                <div className='wrap-name-phone'>
                    <div className='wrap-name-phone__wrap-name'>
                        <Input type='text' textError={errorTextName} typeFor={'name'} blured={bluredName} focused={focusedName} value={textName} onChange={e => setTextName(e.target.value)} {...props}>Имя</Input>
                    </div>
                    <div className='wrap-name-phone__wrap-phone'>
                        <Input type='phone' textError={errorTextPhone} typeFor={'phone'} blured={bluredPhone} focused={focusedPhone} value={textPhone} onChange={e => setTextPhone(e.target.value.replace(/\D/, ''))} {...props}>Телефон</Input>
                    </div>
                </div>
                <div className='checkout-form__wrap-address'>
                    <Input type='text' textError={errorTextAddress} typeFor={'address'} blured={bluredAddress} focused={focusedAddress} value={textAddress} onChange={e => setTextAddress(e.target.value)} {...props}>Полный адрес</Input>
                </div>
            </div>
            <Button>
                Заказать
            </Button>
        </form>
    )
}


export default CheckoutForm