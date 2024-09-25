import React from 'react'

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
      }
    <button onClick ={onClose}>Yopish</button>
    return (
        <div className={'header'}>
            <Button>Yopish</Button>
            <span className={'username'}> </span>

        </div>
    )
}

export default Button