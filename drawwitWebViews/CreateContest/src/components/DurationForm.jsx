import styled from 'styled-components';
import {motion} from 'framer-motion';

export const FormContainer = styled(motion.div)`
    width: 100%;
    height: 60%;
    @media (max-width: 768px) {
        height: 80%;
    }
    @media (max-height: 600px) {
        height: 60%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled(motion.div)`
    width: 95%;
    height: 95%;
    background-color: white;
    border-radius: 20px;
    border: 5px solid black;
`