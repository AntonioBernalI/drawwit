import MainDiv from "./components/MainDiv.jsx";
import {Header, LogoContainer} from "./components/Header.jsx";


export default function DurationPrompt() {
    return (
        <>
            <MainDiv>
                <Header>
                    <LogoContainer
                        initial={{y: -1090}}
                        animate={{y: 0}}
                        exit={{y: -1090}}
                        transition={{duration: 0.8}}
                    >
                        Drawwit
                    </LogoContainer>
                </Header>
            </MainDiv>
        </>
    )
}