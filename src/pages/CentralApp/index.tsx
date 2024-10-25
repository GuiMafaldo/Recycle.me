import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    margin-top: 60px;

    h2 {
        margin-bottom: 40px; 
    }

    > div {
        h3 {
            margin-top: 80px;
            margin-bottom: 40px;
        } 
    }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 86vw;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #000;

    & .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border: 1px solid #000;
        border-radius: 6px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
        > img {
            width: 80px;
         }
    }

    h5 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
    }
`;

const CarouselContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    overflow: hidden;
    position: relative;
`;

const ImageContent = styled.div<{ index: number }>`
    display: flex;
    width: 100vw;
    transform: ${(props) => `translateX(-${props.index * 100}%)`};
    transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ButtonContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 4px 8px;
    background-color: green;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;
type Card = {
    titulo: string;
    descricao?: string;
    imagem: string;
}
const Cards =   [
    {
        titulo: "PLASTICOS",
        descricao: `Plasticos de todos os tipo: 
        Garrafas PET,  
        plástico bolha, 
        plástico de brinquedos, 
        Etc.`,
        imagem: "./assets/pet.webp",
    },
    {
        titulo: "FERRO",
        descricao: `Ferro de diversas qualidades:
        Ferro 1,
        Ferro 2,
        Ferro 3,
        Ferro 4 .`,
        imagem: "./assets/ferro.jpeg",
    },
    {
        titulo: "COBRE",
        descricao: `Cobre de todos os tipos:
        cabos,
        aparelhos quebrados
        obejtos de uso geral.`,
        imagem: "./assets/cobre.jpeg",
    },
    {
        titulo: "PAPELÃO",        
        descricao: `Papelão de todos os tipos:
        Jornal, caderno,
        caixas,
        etc.`,
        imagem: "./assets/papela.jpg",
    }
]
const CentralComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "./assets/foto1.png",
        "./assets/foto1.png",
        "./assets/foto1.png",
        "./assets/foto1.png",
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Efeito para iniciar o carrossel automaticamente
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Muda de imagem a cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <BodyContainer>
            <h2>Informações</h2>

            <CarouselContent>
                <ImageContent index={currentIndex}>
                    {images.map((src, index) => (
                        <Image key={index} src={src} alt={`Slide ${index + 1}`} />
                    ))}
                </ImageContent>
                <ButtonContent>
                    <Button onClick={handlePrev}>Anterior</Button>
                    <Button onClick={handleNext}>Próximo</Button>
                </ButtonContent>
            </CarouselContent>
            <div>
                <h3>Categorias que atendemos</h3>
            </div>
            <CardsContainer className="cards-container">
                {Cards.map((card) => (
                    <div className="card">
                        <h5>{card.titulo}</h5>
                        <img src={card.imagem} alt={card.titulo} />
                    </div>
                ))}
            </CardsContainer>
        </BodyContainer>
    );
};

export default CentralComponent;
