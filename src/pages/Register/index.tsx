import { useState } from "react"

import styled from "styled-components"

const BodyContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    width: 90%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 40px;
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > img {
        margin-top: -70px;
        margin-bottom: 30px;
        height: 14vh; 
    }

    h2 {
        margin-top: -20px;
        margin-bottom: 40px;
        font-family: Kanit;
        font-size: 18px;
    }

    > a {
        margin-bottom: -30px;
        text-decoration: underline;
        color: #000;
        cursor: pointer;
    }
`
const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > input {
        width: 70vw;
        margin-bottom: 16px;
        padding: 10px;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    > button {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 6px;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        background-color: #f9f9f9;
        color: #000;
        font-family: Kanit;
        font-size: 17px;
        cursor: pointer;
    }
`

const RegisterComponent = () => {
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    return (
        <BodyContent>
            <img src="./assets/Recycle.me.png" alt="logo" />
            <h2>Register</h2>
            <FormContent onClick={handleSubmit}>
                <input 
                    type="nome" 
                    placeholder="Name" 
                    name="nome" 
                    onChange={(e) => setNome(e.target.value)}
                    />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="submit">Submit</button>
            </FormContent>
            <a href="/">voltar</a>
        </BodyContent>
    )
}
export default RegisterComponent