import React from "react";
import './form-input.styles.scss';

const FormInput = ({ handleChangle, label, ...otherPros }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChangle} />
        {
            label ?
                (<label className={`${otherPros.value.length ? 'shrink' : ''
                    } form-input-label`} >
                { label }
            </label>) : null
        }
    </div >
);
export default FormInput;