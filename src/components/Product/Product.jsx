import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Product.css';

const Product = () => {
    const {user, onClose} = useTelegram();
    <button onClick ={onClose}>Yopish</button>
    return (
        <div className={'header'}>
            PRODUCT
            <Button>Yopish</Button>
            <span className={'username'}> {user?.username} </span>

        </div>
    )
}

export default Button