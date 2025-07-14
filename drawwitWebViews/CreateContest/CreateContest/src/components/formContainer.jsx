import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormContainer = styled(motion.div)`
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 40%;
    }
`
export const Form = styled(motion.div)`
    width: 80%;
    height: 80%;
    background-color: white;
    border-radius: 30px;
    border: 5px solid black;
    @media (max-width: 768px) {
        height: 60%;
    }
`
export const QuestionContainer = styled(motion.div)`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const Question = styled(motion.div)`
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-align: center;
    font-family: "Gloria Hallelujah", sans-serif;
    @media (max-width: 768px) {
        font-size: 40px;
    }
`
export const InputContainer = styled(motion.div)`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    width: 80%;
    height: 65%;
    background-color: white;
    border-radius: 30px;
    border: 5px solid black;
    margin-top: 2%;
    font-size: 60px;
    text-align: center;
    font-family: "Gloria Hallelujah", sans-serif;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`


