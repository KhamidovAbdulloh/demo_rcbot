import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css';

const Form = () => {
    const {user, onClose} = useTelegram();
    <button onClick ={onClose}>Yopish</button>
    return (
        <div className={'header'}>
            FORM
            <Button>Yopish</Button>
            <span className={'username'}> {user?.username} </span>

        </div>
    )
}

export default Button