import MainDiv from "./components/MainDiv.jsx";
import {DurationHeader, LogoContainer} from "./components/DurationHeader.jsx";
import {
    FormContainer,
    Form,
    DurationOptionsContainer,
    CustomDurationContainer,
    DurationOptions,
    CustomDuration,
    QuestionContainer,
    Question,
    ButtonContainer, HelpButton, List, OptionContainer, Option, StringContainer
} from "./components/DurationForm.jsx";
import { CouncilString, CouncilContainer, CouncilBackdrop, Council, CouncilButtonContainer, OkButton} from "./components/DurationCouncil.jsx";
import { NextButtonContainer, NextButton} from "./components/DurationNextButton.jsx";
import Arrow from "./assets/Arrow.png";
import Radio from "./components/radio.jsx";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";

export default function DurationPrompt({onNext}) {
    const [FirstActive, setFirstActive] = useState(false);
    const [SecondActive, setSecondActive] = useState(false);
    const [ThirdActive, setThirdActive] = useState(false);
    const [FourthActive, setFourthActive] = useState(false);
    const [showCouncil, setShowCouncil] = useState(false);
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
                <Form>
                    <DurationOptionsContainer>
                        <DurationOptions>
                            <QuestionContainer>
                                <Question>
                                    What is the duration of the contest?
                                </Question>
                                <ButtonContainer>
                                    <HelpButton
                                        onClick={()=>{setShowCouncil(!showCouncil)}}
                                        whileTap={{scaleX:1.4}}
                                    >?</HelpButton>
                                </ButtonContainer>
                            </QuestionContainer>
                            <List>
                                <OptionContainer>
                                    <Option
                                        whileTap={{scaleX:1.1}}
                                        onClick={()=>{
                                            setFirstActive(true);
                                            setSecondActive(false);
                                            setThirdActive(false);
                                            setFourthActive(false);
                                        }}
                                    >
                                        <StringContainer>12 Hours</StringContainer>
                                        <Radio
                                            height={"100%"}
                                            width={"20%"}
                                            marginLeft={"5%"}
                                            onClick={()=>{
                                            }}
                                            active={FirstActive}
                                        ></Radio>
                                    </Option>
                                </OptionContainer>
                                <OptionContainer>
                                    <Option
                                        whileTap={{scaleX:1.1}}
                                        onClick={()=>{
                                            setFirstActive(false);
                                            setSecondActive(true);
                                            setThirdActive(false);
                                            setFourthActive(false);
                                        }}
                                    >
                                        <StringContainer>1 Day</StringContainer>
                                        <Radio
                                            height={"100%"}
                                            width={"20%"}
                                            marginLeft={"5%"}
                                            onClick={()=>{
                                            }}
                                            active={SecondActive}
                                        ></Radio>
                                    </Option>
                                </OptionContainer>
                                <OptionContainer>
                                    <Option
                                        whileTap={{scaleX:1.1}}
                                        onClick={()=>{
                                            setFirstActive(false);
                                            setSecondActive(false);
                                            setThirdActive(true);
                                            setFourthActive(false);
                                        }}
                                    >
                                        <StringContainer>2 Days</StringContainer>
                                        <Radio
                                            height={"100%"}
                                            width={"20%"}
                                            marginLeft={"5%"}
                                            onClick={()=>{
                                            }}
                                            active={ThirdActive}
                                        ></Radio>
                                    </Option>
                                </OptionContainer>
                                <OptionContainer>
                                    <Option
                                        whileTap={{scaleX:1.1}}
                                        onClick={()=>{
                                            setFirstActive(false);
                                            setSecondActive(false);
                                            setThirdActive(false);
                                            setFourthActive(true);
                                        }}
                                    >
                                        <StringContainer>1 Week</StringContainer>
                                        <Radio
                                            height={"100%"}
                                            width={"20%"}
                                            marginLeft={"5%"}
                                            onClick={()=>{
                                            }}
                                            active={FourthActive}
                                        ></Radio>
                                    </Option>
                                </OptionContainer>
                            </List>
                        </DurationOptions>
                    </DurationOptionsContainer>
                    <CustomDurationContainer>
                        <CustomDuration/>
                    </CustomDurationContainer>
                </Form>
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
            <AnimatePresence>
                {showCouncil && (
                    <CouncilBackdrop
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:0.3}}
                    >
                        <CouncilContainer>
                            <Council>
                                <CouncilString>
                                    Each contest runs for a specific duration. Once the time is up, the contest ends and the winners are announced. Learn more by reading the "How to Play" section.
                                </CouncilString>
                            </Council>
                            <CouncilButtonContainer>
                                <OkButton
                                    onClick={()=>{setShowCouncil(!showCouncil)}}
                                >
                                    Ok
                                </OkButton>
                            </CouncilButtonContainer>
                        </CouncilContainer>
                    </CouncilBackdrop>
                )}
            </AnimatePresence>
        </MainDiv>
    )
}