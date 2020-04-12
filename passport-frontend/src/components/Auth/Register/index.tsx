import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Style from './style'

interface Props {
    name: string,
    email: string,
    password: string
}

const Register: React.FC<Props> = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleSubmit, register, errors } = useForm()

    const onSubmit = async(values) => {
        try {
            const { name, email, password } = values

            const rawData = await fetch('/api/user/register', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, password})
            })

            await rawData.json()
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Style.Register>
            <Style.Form as='form' onSubmit={handleSubmit(onSubmit)}>
                <Style.Input as='input'
                type="text"
                placeholder='Username'
                name='name'
                ref={register({required: 'Required'})}
                value={name}
                onChange={e => setName(e.target.value)}
                />
                {errors.name && 'name is required'}
                <Style.Input as='input'
                type="email"
                name='email'
                ref={register({required: 'Required'})}
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                {errors.email && 'email is required'}
                <Style.Input as='input'
                type="password"
                name='password'
                ref={register({required: 'Required'})}
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                {errors.password && 'password is required'}
                <Style.Button type="submit">Sign Up</Style.Button>
            </Style.Form>
        </Style.Register>
    )
}

export default Register