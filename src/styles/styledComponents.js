import styled from 'styled-components'

export const Heading = styled.h1`
    font-size: 3rem;
    text-shadow: 4px 4px #7400b8;

    @media (max-width: 500px) {
        font-size: 1.5rem;
        text-shadow: 2px 2px #7400b8;
    }
`;

export const Button = styled.div`
    border: 2px solid #80ffdb;
    box-shadow: 0 0 15px 5px #80ffdb;
    border-radius: .5rem;
    width: 20%;
    margin: 2% auto 0 auto;
    font-size: 2rem;

    &:hover {
        background: rgba(128, 255, 219, 0.3);
    }

    @media (max-width: 800px) {
        font-size: 1.2rem;
        width: 40%;
    }
`;

export const Question = styled.p`
    font-size: 2rem;

    @media (max-width: 800px) {
        font-size: 1.5rem;
    }

`;

export const Card = styled.div`
    font-size: 1.6rem;
    border: 1px solid #7400b8;
    width: 40%;
    margin: 2% 0;
    position: relative;
    transform: rotateY(var(--rotate-y, 0));
    transition: 500ms;
    box-shadow: 0 0 20px 5px #7400b8;

    &:hover {
        border: 1px solid #4ea8de;
        box-shadow: 0 0 20px 5px #4ea8de;
    }

    @media (max-width: 900px) {
        width: 100%;

        @media (max-width: 500px) {
            font-size: 1.1rem;
        }
    }
    
`;

export const AnswerFront = styled.div`
    transform: rotateY(0deg);
    background: #000;
    padding: 3% 0;

    @media (max-width: 800px) {
        padding: 1% 0;
    }
`;

export const AnswerBack = styled.div`
    transform: rotateY(180deg);
    background: #000;
    padding: 3% 0;

    p {
        color: #4ea8de;
    }

    @media (max-width: 800px) {
        padding: 1% 0;
    }
`;

export const AnswerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;

    .selected {
        border: 1px solid #4ea8de;
        box-shadow: 0 0 20px 5px #4ea8de;
    }

    .correct {
        border: 2px solid #80ffdb;
        box-shadow: 0 0 20px 5px #80ffdb;
    }

    .flip {
        --rotate-y: 180deg;
    }
`;

export const ScoreContainer = styled.div`
    font-size: 3rem;
    width: 60%;
    margin: 0 auto;
    
    p {
        text-shadow: 1px 1px #80ffdb;
    }

    @media (max-width: 500px) {
        font-size: 1.5rem;
        width: 90%;
    }
`;