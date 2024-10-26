import styled from "styled-components";


export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 93vw;
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

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 88vw;
    margin: 0 auto;
    margin-top: 30px;
    padding: 20px 10px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 6px;

    & .date {
        width: 38vw;
        margin:0 auto;
        padding: 0;
        display: inline;
        font-size: 11px;
        font-family: Kanit;
        font-weight: bold;

        > a {
            color: green; 
        } 
    }
    
    & .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        border: 1px solid #000;
        border-radius: 6px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
        > img {
            width: 80px;
         }
    }

    & .modal {
        display: flex | none;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.5);
        top: 100px;
        left: 14px;
        width: 90vw;
        height: 50vh;
        position: fixed;
        z-index: 1;

        & .close-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
            width: 10px;
            height: 10px;
            cursor: pointer;

            > img {
                width: 16px; 
            }
        
       }
        
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80vw;
            height: 50vh;
            background-color: #fff;
            border-radius: 6px;
            padding: 20px;
                
            > h4 {
                    margin-bottom: 20px;
                    font-family: Kanit;
                    font-size: 1.4em;

                }
            
                > div {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    
                    > img {
                        width: 50vw;
                        margin: 0 auto;
                    } 
            }
        }


    h5 {
        font-size: 10px;
        margin-bottom: 10px;
    }

    p {
        font-size: 13px;
    }
`;

export const CarouselContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    overflow: hidden;
    position: relative;
`;

export const ImageContent = styled.div<{index: number}>`
    display: flex;
    width: 100vw;
    transform: ${(props) => `translateX(-${props.index * 100}%)`};
    transition: transform 0.5s ease-in-out;
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const ButtonContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;
`;

export const Button = styled.button`
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