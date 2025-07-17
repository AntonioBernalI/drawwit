import styled from 'styled-components';
import {motion} from 'framer-motion';

export const CouncilBackdrop = styled(motion.div)`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 30;
    height: 100%;
    width: 100%;
    background-color: rgba(187, 187, 187, 0.44);
    border: 5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CouncilContainer = styled.div`
    width: 75%;
    height: 75%;
    background-color: white;
    border-radius: 20px;
    border: 5px solid black;
    @media (max-width: 768px) {
        height: 60%;
        width: 90%;
    }
    @media (max-height: 600px) {
        height: 75%;
        width: 90%;
    }
`
export const Council = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px solid black;
    @media (max-width: 720px) {
        height: 80%;
    }
`
export const CouncilString = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-align: center;
    line-height: 90px;
    @media (max-width: 768px) {
        width: 85%;
        font-size: 30px;
        line-height: 50px;
    }
    @media (max-height: 600px) {
        width: 90%;
        font-size: 30px;
        line-height: 50px;
    }
`
export const CouncilButtonContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 720px) {
        height: 20%;
    }
`
export const OkButton = styled.div`
    width: 50%;
    height: 95%;
    background-color: white;
    border-radius: 20px;
    border: 5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    @media (max-width: 720px) {
        font-size: 50px;
        height: 70%;
    }
    @media (max-height: 600px) {
        font-size: 50px;
    }
    user-select: none;
`
