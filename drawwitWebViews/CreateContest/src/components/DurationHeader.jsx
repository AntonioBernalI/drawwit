import styled from 'styled-components';
import {motion} from 'framer-motion';

export const DurationHeader = styled(motion.div)`
    width:100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 10%;
    }
    @media (max-height: 600px) {
        height: 20%;
    }
`;
export const LogoContainer = styled.div`
    height: 100%;
    width: 50%;
    @media (max-width: 768px) {
        width: 70%;
        font-size: 60px;
    }
    @media (max-height: 600px) {
        font-size: 70px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
    font-size: 100px;
`