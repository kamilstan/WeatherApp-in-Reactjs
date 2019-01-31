import React from 'react';
import './Form.css'

const Form = props => {
    return (
        <form class='form' onSubmit={props.submit}>
            <input type='text' value={props.value} onChange={props.change} placeholder='Podaj miasto'></input>
            <button>Szukaj</button>

        </form>
    );
}

export default Form;