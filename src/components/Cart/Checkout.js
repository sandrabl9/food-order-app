import { useRef, useState } from 'react';
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isPostal = value => value.trim().length === 5;
const isPhone = value => value.trim().length === 9;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
        phone: true
    }); 

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalInputRef = useRef();
    const phoneInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isPostal(enteredPostal);
        const enteredPhoneIsValid = isPhone(enteredPhone);

        setFormInputValidity({
            name:enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid,
            phone: enteredPhoneIsValid
        });

        const formIsValid = enteredNameIsValid && 
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostalIsValid &&
        enteredPhoneIsValid;

        if (!formIsValid) {
            return;
        }
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal,
            phone: enteredPhone
        }
            
        );

    }; 
    
    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`;
    const postalControlClasses = `${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`;
    const phoneControlClasses = `${classes.control} ${formInputValidity.phone ? '' : classes.invalid}`;


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid street</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city</p>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValidity.name && <p>Please enter a valid Postal Code</p>}
            </div>
            <div className={phoneControlClasses}>
                <label htmlFor='phone'>Phone</label>
                <input type='number' id='phone' ref={phoneInputRef} />
                {!formInputValidity.name && <p>Please enter a valid phone</p>}
            </div>
            <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
            </div>
            
        </form>

    );
};

export default Checkout;