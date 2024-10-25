import { Link } from "react-router-dom"
import styled from "styled-components"

const BodyContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 500px; 
    }
`

const ButtonComponent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: -60px;

    > a {
        color: #000;
        font-family: Kanit;
        text-decoration: none;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
        padding: 4px;

        &:hover {
            border: 1px solid #000;
        }
    }
`

const InitialPageComponent = () => {
    return (
        <BodyContent>
            <img src="./assets/Recycle.me.png" alt="Recicle Logo" />
            <ButtonComponent>
                <Link to="/login">Sign in</Link>
                <Link to="/register">Create account</Link>
            </ButtonComponent>
        </BodyContent>
    )
} 

export default InitialPageComponent