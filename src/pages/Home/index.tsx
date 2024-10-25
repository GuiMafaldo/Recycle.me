import { useState } from "react"
import { Link } from "react-router-dom"

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
        margin-top: -80px;
        margin-bottom: 30px;
        height: 20vh; 
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
const FormComponents = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > input {
        width: 75vw;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        padding: 12px;
        margin-bottom: 10px;
    }

    & .button {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 20vw; 
        padding: 8px;
        text-decoration: none;
        text-align: center;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        font-family: Kanit;
        color: #000;
    }
`
const HomeComponent = () => {
    let userEmail = "user@email.com"
    let userPassword = "123456"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        if(email === userEmail && password === userPassword) {
            console.log("Login Successfully")
        } else{
            console.log("verify your email and password")
        }
    }

    return (
            <BodyContent>
                <img src="./assets/Recycle.me.png" alt="Recicle Logo" />
                <h2>Enter your account Recycle.me</h2>
                <FormComponents onClick={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <input 
                        type="password"  
                        placeholder="Password"
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Link className="button" to="/central">Entrar</Link>
                </FormComponents>
                <a href="/">Voltar</a>
            </BodyContent>
        )
    } 

export default HomeComponent