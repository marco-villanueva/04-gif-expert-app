import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handdleInputValue = (e) => {
        setInputValue( e.target.value );
    };

    const handdleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
    };

    return (
        <form onSubmit={ handdleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handdleInputValue }
                
                />
        </form>
            
    );

     
    
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
