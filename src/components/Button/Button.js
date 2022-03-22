import React from 'react';
import './Button.css';

function Button({type, disabled, action, text}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={action}
        >
            {text}
        </button>
    );
}

export default Button;