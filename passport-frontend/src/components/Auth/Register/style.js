import styled from 'styled-components'

export const Register = styled.div`
    display: flex;
    max-width: 400px;
    width: 100%;
    background: #fff;
    padding: 25px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 50px);
`

export const Input = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    padding: 10px;
    margin-bottom: 10px;
`

export const Button = styled.button`
    display: flex;
    width: calc(100% + 25px);
    height: 50px;
    padding: 10px;
    margin-top: 20px;
    justify-content: center;
    cursor: pointer
`