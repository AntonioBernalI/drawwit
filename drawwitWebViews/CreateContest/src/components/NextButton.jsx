import styled from 'styled-components';
import {motion} from 'framer-motion';


export const NextButtonContainer = styled(motion.div)`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NextButton = styled(motion.div)`
    height: 130px;
    width: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
    border: 5px solid black;
    @media (max-height: 600px) {
        margin-top: 60px;
        height: 100px;
        width: 390px;
    }
`

