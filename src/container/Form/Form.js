import React, { useState } from "react";
import './Form.css';
import Button from "../../components/Button/Button";
import InputPassword from "../../components/InputPassword/InputPassword";
import InputUsername from "../../components/InputUsername/InputUsername";
import { validate } from '../../utils/Validate';

const Form = () => {
    const [formInputs, setFormInputs] = useState({
        userName: '',
        password: ''
    })
    const [errors, setErrors] = useState(null);

    const handleChangeInput = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormInputs({
            ...formInputs,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const validateErrors = validate(formInputs)

        if(validateErrors) {
            setErrors(validateErrors);
        }else {         
            setErrors(null);
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                <InputUsername userName={formInputs.userName} handleChangeInput={handleChangeInput}/>
                <InputPassword password={formInputs.password} handleChangeInput={handleChangeInput}/>
                <Button/>
            </form>
            {errors ? <p className="error-message"> {errors}  </p>  : null }
        </div>
    );
}

export default Form;