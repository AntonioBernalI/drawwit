import MainDiv from "./components/MainDiv.jsx";
import {DurationHeader, LogoContainer} from "./components/DurationHeader.jsx";
import {FormContainer, Form} from "./components/DurationForm.jsx";
import { NextButtonContainer, NextButton} from "./components/DurationNextButton.jsx";
import Arrow from "./assets/Arrow.png";

export default function DurationPrompt({onNext}) {
    return (
        <MainDiv>
            <DurationHeader
                initial={{x:-1000,y:-1000}}
                animate={{x:0,y:0}}
                transition={{duration:0.5}}
                exit={{x:-1000,y:-1000}}
            >
                <LogoContainer>Drawwit</LogoContainer>
            </DurationHeader>
            <FormContainer
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{duration:0.5}}
                exit={{scale:0}}
            >
                <Form></Form>
            </FormContainer>
            <NextButtonContainer
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{duration:0.5}}
                exit={{x:-1000}}
            >
                <NextButton
                    whileTap={{scaleX: 1.1}}
                    onClick={onNext}
                >
                    <img alt="Next" src={Arrow} style={{height: "50%", width: "80%"}}/>
                </NextButton>
            </NextButtonContainer>
        </MainDiv>
    )
}