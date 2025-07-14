import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.div)`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 30%;
    }
`
export const LogoContainer = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 90px;
    font-family: "Gloria Hallelujah", sans-serif;
    text-shadow: 4px 4px 0px rgba(0, 0, 0,0.2);
    user-select: none;
    @media (max-width: 768px) {
        align-items: flex-end;
    }
`

