import { useState } from 'react'
import MainDiv from "./components/MainDiv.jsx";
import { Header , LogoContainer} from "./components/Header.jsx";
import {FormContainer, Form, QuestionContainer, InputContainer, Input, Question} from "./components/formContainer.jsx";
import { NextButtonContainer, NextButton} from "./components/NextButton.jsx";
import Arrow from "./assets/Arrow.png";
import { AnimatePresence } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MainDiv>
            <AnimatePresence>
                <Header>
                    <LogoContainer initial={{y:-1090}} animate={{y:0}} transition={{duration:0.8}} >
                        Drawwit
                    </LogoContainer>
                </Header>
            </AnimatePresence>
            <AnimatePresence>
                <FormContainer initial={{scale:0.1}} animate={{scale:1}} transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <Form>
                        <QuestionContainer>
                            <Question>What is the theme of your contest?</Question>
                        </QuestionContainer>
                        <InputContainer>
                            <Input/>
                        </InputContainer>
                    </Form>
                </FormContainer>
            </AnimatePresence>
            <AnimatePresence>
                <NextButtonContainer  initial={{x:-1090}} animate={{x:0}} transition={{duration:0.8}}>
                    <NextButton whileTap={{ scaleX: 1.1 }}>
                        <img alt="Next" src={Arrow} style={{ height: "50%", width: "80%" }} />
                    </NextButton>
                </NextButtonContainer>
            </AnimatePresence>
        </MainDiv>
    </>
  )
}

export default App
