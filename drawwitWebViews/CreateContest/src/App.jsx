import {useState, useEffect} from 'react'
import ThemePrompt from "./ThemePrompt.jsx";
import DurationPrompt from "./DurationPrompt.jsx";
import {AnimatePresence} from "framer-motion";
import {
    Alert,
    AlertBackdrop,
    AlertContainer,
    AlertString,
    ButtonContainer,
    OkButton
} from "./components/Alert.jsx";
import MainDiv from "./components/MainDiv.jsx";

function App() {
    const [screen, setScreen] = useState("Theme");
    const [theme, setTheme] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [duration, setDuration] = useState({});
    const handleNext = () => {
        const totalMinutes = (duration.days * 1440) + (duration.hours * 60) + duration.minutes;

        if (theme.trim() === "") {
            setAlertMessage("Please make sure to fill out the form.")
            setShowAlert(true);
            return;
        }

        if ((Object.keys(duration).length === 0 && screen === "Duration") || (totalMinutes < 30 && screen === "Duration")) {
            setAlertMessage("The contests must last at least 30 minutes.");
            setShowAlert(true);
            return;
        }

        if (totalMinutes >= 131500 && screen === "Duration") {
            setAlertMessage("Contests must be under three months long.");
            setShowAlert(true);
            return;
        }

        switch (screen) {
            case "Theme":
                setScreen("Duration");
                break;
            case "Duration":
                setScreen("People");
                break;
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [screen, theme]);
    useEffect(() => {
        console.log(duration)
    },[duration])
    return (
        <>
            {/* Alert */}
            <AnimatePresence>
                {showAlert && (
                    <AlertBackdrop
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        transition={{duration:0.3}}
                    >
                        <AlertContainer>
                            <Alert>
                                <AlertString>{alertMessage}</AlertString>
                            </Alert>
                            <ButtonContainer>
                                <OkButton onClick={() => setShowAlert(false)}>Ok</OkButton>
                            </ButtonContainer>
                        </AlertContainer>
                    </AlertBackdrop>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <AnimatePresence mode={"wait"}>
                {screen === "Theme" && (
                    <ThemePrompt
                        key="theme"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        onNext={handleNext}
                    />
                )}
                <AnimatePresence mode={"wait"}>
                    {screen === "Duration" && (
                        <DurationPrompt
                            onNext={handleNext}
                            onFirst={()=>{
                                setDuration({
                                    days: 0,
                                    hours: 12,
                                    minutes: 0,
                                })
                            }}
                            onSecond={()=>{
                                setDuration({
                                    days: 1,
                                    hours: 0,
                                    minutes: 0,
                                })
                            }}
                            onThird={()=>{
                                setDuration({
                                    days: 2,
                                    hours: 0,
                                    minutes: 0,
                                })
                            }}
                            onFourth={()=>{
                                setDuration({
                                    days: 7,
                                    hours: 0,
                                    minutes: 0,
                                })
                            }}
                            onCustom={(customDuration)=>{
                                setDuration({
                                    days: customDuration.days,
                                    hours: customDuration.hours,
                                    minutes: customDuration.minutes,
                                })
                            }}
                        />
                    )}
                </AnimatePresence>
                {screen === "People" && (
                    <MainDiv>
                    </MainDiv>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
