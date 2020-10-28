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

export const Answer = styled.div`
    font-size: 1.5rem;
    border: 2px solid #fff;
    width: 40%;
    padding: 5% 0;
    margin: 2% 0;
`;

export const AnswerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: space-around;
    align-content: center;
`;