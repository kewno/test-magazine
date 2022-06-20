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

    // function setCursorPosition(pos, elem) {
    //     elem.focus();
    //     if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    //     else if (elem.createTextRange) {
    //         var range = elem.createTextRange();
    //         range.collapse(true);
    //         range.moveEnd("character", pos);
    //         range.moveStart("character", pos);
    //         range.select()
    //     }
    // }

    // function mask(event) {
    //     var matrix = "+7 (___) ___ ____",
    //         i = 0,
    //         def = matrix.replace(/\D/g, ""),
    //         val = this.value.replace(/\D/g, "");
    //     if (def.length >= val.length) val = def;
    //     this.value = matrix.replace(/./g, function(a) {
    //         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    //     });
    //     if (event.type == "blur") {
    //         if (this.value.length == 2) this.value = ""                                   .match(/.{2}\s/g).join(" ").substr(0,12) || "")
    //     } else setCursorPosition(this.value.length, this)
    // }
//type='POST' .replace(/[+()]/g, "\\$&")   .replace(/\D/, '')           .replace(/^[0-9]/, '+7'))              setTextPhone(e.target.value.replace(/\D/g, '').replace(/^[0-9]/, '+7')) - проверка на +7
    return (
        <form>
            <div className='checkout-form' onClick={() => handleClick()}>
                <div className='wrap-name-phone'>
                    <div className='wrap-name-phone__wrap-name'>
                        <Input type='text' textError={errorTextName} typeFor={'name'} blured={bluredName} focused={focusedName} value={textName} onChange={e => setTextName(e.target.value)} {...props}>Имя</Input>
                    </div>
                    <div className='wrap-name-phone__wrap-phone'>
                        <Input type='phone' textError={errorTextPhone} typeFor={'phone'} blured={bluredPhone} focused={focusedPhone} value={textPhone} onChange={e => setTextPhone(e.target.value.replace(/\D/g, '').replace(/^[0-9]/, '+7'))} {...props}>Телефон</Input>
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