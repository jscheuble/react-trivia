import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    height: 20px;
    width: 80%;
    border: 1px solid #fff;
    background: #000;
    border-radius: 50px;
    margin: 2% auto;

    div {
        height: 100%;
        background: #fff;
        text-align: right;
        border-radius: 50px;
        padding-right: 10px;
        transition: width 500ms;

        span {
            font-size: 1rem;
            color: black;
            text-shadow: 2px 2px #fff;
        }
    }
`

const ProgressBar = ({ questionCount }) => {
    
    return (
        <Bar>
            <div style={{ width: `${questionCount * 10}%`}} >
                <span className='text'>{questionCount}/10 </span>
            </div>
        </Bar>
    )
}

export default ProgressBar;