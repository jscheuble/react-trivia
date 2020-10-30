import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    height: 20px;
    width: 75%;
    border: 1px solid #80ffdb;
    box-shadow: 0 0 5px 5px rgba(128, 255, 219, 0.3);
    background: #000;
    border-radius: 50px;
    margin: 4% auto;

    div {
        height: 100%;
        background: #80ffdb;
        text-align: right;
        border-radius: 50px;
        transition: width 500ms;
        
        span {
            padding-right: 10px;
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