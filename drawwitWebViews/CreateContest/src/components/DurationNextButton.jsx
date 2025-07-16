import styled from 'styled-components';
import {motion} from 'framer-motion';

export const NextButtonContainer = styled(motion.div)`
    width: 100%;
    height: 20%;
    @media (max-width: 768px) {
        height: 10%;
    }
    @media (max-height: 600px) {
        height: 20%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NextButton = styled(motion.div)`
    width: 30%;
    height: 70%;
    background-color: white;
    border-radius: 20px;
    border: 5px solid black;
    @media (max-width: 768px) {
        width: 50%;
        height: 90%;
        border-radius: 10px;
    }
    @media (max-height: 600px) {
        width: 50%;
        height: 90%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`