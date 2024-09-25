import React, { useState } from 'react'
import './Form.css';

const Form = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [tel, setTel] = useState('')
    const [group, setGroup] = useState('group')

    const onFirstnameChange = (e) => {
        setFirstname(e.target.value)
    }

    const onLastnameChange = (e) => {
        setLastname(e.target.value)
    }

    const onTelChange = (e) => {
        setTel(e.target.value)
    }

    const onGroupChange = (e) => {
        setGroup(e.target.value)
    }
    
    return (
        <div className={'form'}>
            <h3>O'zingiz haqingizda ma'lumotlarni kiriting</h3>
            <input className={'input'} type="text" placeholder={'Ismingiz'} value={firstname} onChange={onFirstnameChange}/>
            <input className={'input'} type="text" placeholder={'Familiyangiz'} value={lastname} onChange={onLastnameChange}/>
            <input className={'input'} type="text" placeholder={'Telefon raqamingiz'} value={tel} onChange={onTelChange}/>
            <select value={group} onChange={onGroupChange} className={'select'}> 
                <option value={'group'}>IELTS</option>
                <option value={'group'}>INTERMEDIATE</option>
            </select>
        </div>
    )
}

export default Form