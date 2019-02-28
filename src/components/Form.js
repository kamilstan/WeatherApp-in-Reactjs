import React from 'react';
import './Form.css'

const Form = props => {
    return (
        <form class='form'>
            <input type='text' value={props.value} onChange={props.change} placeholder='Podaj miasto'></input>


        </form>
    );
}

export default Form;