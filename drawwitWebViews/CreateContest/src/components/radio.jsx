import styled from 'styled-components';
import {motion} from 'framer-motion';

const BigCircle = styled(motion.div)`
    height: 80%;
    width: 60%;
    border-radius: 50%;
    border: 5px solid black;
    @media (max-width: 720px) {
        width: 50%;
        height: 60%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`
const SmallCircle = styled(motion.div)`
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: black;
`
const Radio = ({height , width , marginLeft, active, onClick}) => {
    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:height,
            width:width,
            backgroundColor:'white',
            margin:marginLeft,
        }}>
            <BigCircle
                whileTap={{scale:1.1}}
                onClick={()=>{
                    onClick();
                }}
            >
                {active && (
                    <SmallCircle/>
                )}
            </BigCircle>
        </div>
    );
}

export default Radio ;