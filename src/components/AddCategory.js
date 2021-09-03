import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {
    const [InputValue, setInputValue] = useState('')

    const submit = (e) => {
        e.preventDefault();
        if (InputValue.length >= 2){
            setCategorias( [] );
            setCategorias( c => [...c, InputValue] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit = { submit }>
            <input 
                type="text"
                value={InputValue}
                onChange = { e => setInputValue(e.target.value) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
