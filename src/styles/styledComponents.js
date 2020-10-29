import styled from 'styled-components'

export const Heading = styled.h1`
    font-size: 3rem;
`;

export const Button = styled.div`
    border: 2px solid red;
    width: 25%;
    margin: 0 auto;
    font-size: 2rem;
`;

export const Question = styled.p`
    font-size: 1.5rem;
`;

export const Card = styled.div`
    font-size: 1.5rem;
    border: 2px solid #fff;
    width: 40%;
    padding: 5% 0;
    margin: 2% 0;
    position: relative;
    transform: rotateY(var(--rotate-y, 0));
    transition: 150ms;

    @media (max-width: 800px) {
        width: 90%;
        padding: 1% 0;
    }
`;

export const AnswerFront = styled.div`
    transform: rotateY(0deg);
`;

export const AnswerBack = styled.div`
    transform: rotateY(180deg);
`;

export const AnswerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;

    .selected {
        border: 2px solid red;
    }

    .flip {
        --rotate-y: 180deg;
    }
`;