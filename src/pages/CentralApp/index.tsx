import React, { useState, useEffect } from "react";
import { 
    BodyContainer, 
    CarouselContent, 
    ImageContent, 
    ButtonContent, 
    Button, 
    CardsContainer,
    Image
     } from "./styles";
import { Link } from "react-router-dom";

const Cards =   [
    {
        id: 1,
        titulo: "PLASTICOS",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/pet.webp",
        alt: "Pet"
    },
    {
        id: 2,
        titulo: "FERRO",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/ferro.jpeg",
        alt: "Ferro"
    },
    {
        id: 3,
        titulo: "COBRE",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/cobre.jpeg",
        alt: "Cobre"
    },
    {
        id: 4,
        titulo: "PAPELÃO",        
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/papela.jpg",
        alt: "Papelão"
    },
    {
        id: 5,
        titulo: "METAL",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/metal.jpeg",
        alt: "Metal"
    },
    {
        id: 6,
        titulo: "VIDRO",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/vidro.jpeg",
        alt: "Vidro"
    },
    {
        id: 7,
        titulo: "RESIDUOS PERIGOSOS",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/perigoso.png",
        alt: "Residuos Perigosos"
    },
    {
        id: 8,
        titulo: "MATERIAIS HOSPITALARES",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/hospital.jpeg",
        alt: "Materiais Hospitalares"
    },
    {
        id: 9,
        titulo: "MATERIAIS RADIOATIVOS",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/radio.jpeg",
        alt: "Materiais Radioativos"
    },
    {
        id: 10,
        titulo: "MATERIAIS",
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.`,
        imagem: "./assets/1.jpeg",
        alt: "Materiais"
    }
]


const CentralComponent = ()  => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleOpenModal = (id: any) => {
        setSelectedCard(id);
        setModalOpen(!modalOpen)
    }  
    const images = [
        "./assets/1.jpeg",
        "./assets/2.jpeg",
        "./assets/3.jpeg",
        "./assets/4.jpeg",
    ];
// button functions slider carousel
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // init carousel
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000); //set time to change images
        return () => clearInterval(interval);
    }, []);

    return (
        <BodyContainer>
            <h2>Informações</h2>

            <CarouselContent>
                <ImageContent index={currentIndex}>
                    {images.map((image, idx) => (
                        <Image key={idx} src={image} alt={`Slide ${idx + 1}`} />
                    ))}
                      
                </ImageContent>
                <ButtonContent>
                    <Button onClick={handlePrev}><img src="./assets/left.png" alt="" /></Button>
                    <Button onClick={handleNext}><img src="./assets/right.png" alt="" /></Button>
                </ButtonContent>
            </CarouselContent>
            <div>
                <h3>Categorias que atendemos</h3>
            </div>
            <CardsContainer className="cards-container">
                {Cards.map((card) => (
                    <div key={card.id}  onClick={() => handleOpenModal(card.id)} className="card">
                        <h5>{card.titulo}</h5>
                        <img src={card.imagem} alt={card.alt} />
                    </div>
                ))}
                {modalOpen && selectedCard !== null && (
                    <section className="modal">
                        <div className="close-modal">
                            <img src="./assets/close.png" alt={selectedCard} onClick={handleOpenModal} />
                        </div>
                        {Cards.filter((card) => card.id === selectedCard).map(card => (
                            <div id="modal">
                                <h4>{card.titulo}</h4>
                                <div>
                                    <img src={card.imagem} alt={card.alt} />
                                    <p>{card.descricao}</p>
                                </div>   
                            </div>     
                        ))}
                </section>
                )}
                  <p className="date"><Link to="/calendario">Ver datas disponiveis</Link></p>
            </CardsContainer>
        </BodyContainer>
    );
};

export default CentralComponent;