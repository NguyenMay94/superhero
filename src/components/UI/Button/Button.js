import React from 'react';
import '../../../asset/sass/components/button.scss';

const btnTypes = ["primary", "default"];
const Button = (props) => {
    const {type, onClick, labelButton, isDisabled} = props;
    const className = btnTypes.includes(type) ? `btn-${type}` : 'btn-default';
    return (
    <button className={`btn ${className}`} onClick={onClick} disabled={isDisabled}>{labelButton}</button>
    )
}

export default Button;