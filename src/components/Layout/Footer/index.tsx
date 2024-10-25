import styled from "styled-components"

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
    height: 30vh;
    background-color: #f9f9f9;
    border-top: 1px solid #e9e9e9;

    > div {
        text-align: center;
        margin-top: 20px;
        padding-bottom: 20px;
        p {
            font-size: 12px;
            color: green;
            margin-top: 6px;

            a {
                color: green;
            }
        } 
    }

    > img {
        height: 20vh;
        margin-top: 10px;
    }
`

const FooterComponent = () => {
    return (
        <FooterContainer>
            <img src="./assets/Recycle.me.png" alt="Recycle.me" />
            <div>
                <p>&copy; Todos os direitos reservados - 2024 Recycle.me</p>
                <p>Desenvolvido  por <a href="http://www.linkedin.com/in/guimafaldo">Guilherme</a></p>
            </div>
        </FooterContainer>
    )
}

export default FooterComponent