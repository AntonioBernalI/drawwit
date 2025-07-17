import {motion, AnimatePresence} from 'framer-motion';
import MainDiv from "./components/MainDiv.jsx";
import {Header, LogoContainer} from "./components/Header.jsx";
import {FormContainer, Form, QuestionContainer, InputContainer, Input, Question} from "./components/formContainer.jsx";
import {NextButtonContainer, NextButton} from "./components/NextButton.jsx";
import Arrow from "./assets/Arrow.png";

export default function ThemePrompt({value, onChange, onNext}) {
    return (
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

            <FormContainer
                as={motion.div}
                initial={{scale: 0.1}}
                animate={{scale: 1}}
                exit={{scale: 0}}
                transition={{duration: 0.5, ease: "easeInOut"}}
            >
                <Form>
                    <QuestionContainer>
                        <Question>What is the theme of your contest?</Question>
                    </QuestionContainer>
                    <InputContainer>
                        <Input value={value} onChange={onChange} autoFocus={true} />
                    </InputContainer>
                </Form>
            </FormContainer>

            <NextButtonContainer
                as={motion.div}
                initial={{x: -1090}}
                animate={{x: 0}}
                exit={{x: -1090}}
                transition={{duration: 0.8}}
            >
                <NextButton whileTap={{scaleX: 1.1}} onClick={onNext}>
                    <img alt="Next" src={Arrow} style={{height: "50%", width: "80%"}}/>
                </NextButton>
            </NextButtonContainer>
        </MainDiv>
    );
}

