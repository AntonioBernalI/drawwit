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
    height: 110%;
    @media (max-width: 720px) {
        height: 90%;
    }
    @media (max-height: 600px) {
        height: 100%;
    }
    background-color: white;
    border-radius: 20px;
    border: 5px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
    }
`;
export const DurationOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CustomDurationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DurationOptions = styled.div`
    height: 95%;
    width: 95%;
    background-color: white;
    border-radius: 20px;
`
export const CustomDuration = styled.div`
    height: 50%;
    width: 80%;
    background-color: white;
    border-radius: 20px;
    border: 5px solid black;
    @media (max-width: 720px) {
        height: 90%;
    }
    @media (max-height: 600px) {
        height: 60%;
        width: 90%;
    }
`
export const QuestionContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 5px solid black;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`
export const Question = styled.div`
    width: 65%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 45px;
    line-height: 50px;
    @media (max-width: 720px) {
        width: 70%;
        line-height: 30px;
        font-size: 30px;
    }
    @media (max-height: 600px) {
        width: 70%;
        font-size: 20px;
        line-height: 25px;
    }
`

export const ButtonContainer = styled.div`
    width: 20%;
    height: 100%;
    margin-left: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HelpButton = styled(motion.div)`
    width: 50%;
    height: 60%;
    font-size: 50px;
    border-radius: 50%;
    background-color: white;
    border: 5px solid black;
    @media (max-height: 600px) {
        height: 50%;
        width: 55%;
        font-size: 20px;
    }
    @media (max-width: 720px) {
        width: 60%;
        height: 50%;
        font-size: 30px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`

export const List = styled.div`
    width: 100%;
    height: 75%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`

export const OptionContainer = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Option = styled(motion.div)`
    width: 90%;
    height: 90%;
    border-radius: 20px;
    border: 5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StringContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    @media (max-height: 600px) {
        font-size: 25px;
    }
    @media (max-width: 720px) {
        font-size: 35px;
    }
    user-select: none;
`