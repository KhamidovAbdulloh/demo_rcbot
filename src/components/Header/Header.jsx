import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    <button onClick ={onClose}>Yopish</button>
    return (
        <div className={'header'}>
            <Button>Yopish</Button>
            <span className={'username'}> {user?.username} </span>

        </div>
    )
}

export default Header