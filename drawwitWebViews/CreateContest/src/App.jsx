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

function App() {
    const [screen, setScreen] = useState("Theme");
    const [theme, setTheme] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleNext = () => {
        if (theme.trim() === "") {
            setShowAlert(true);
            return;
        }
        switch (screen) {
            case "Theme":
                setScreen("Duration");
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && screen === "Theme") {
                event.preventDefault();
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [screen, theme]);

    return (
        <>
            {/* ALERTA SEPARADA */}
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
                                <AlertString>Please make sure to fill out the form.</AlertString>
                            </Alert>
                            <ButtonContainer>
                                <OkButton onClick={() => setShowAlert(false)}>Ok</OkButton>
                            </ButtonContainer>
                        </AlertContainer>
                    </AlertBackdrop>
                )}
            </AnimatePresence>

            {/* CONTENIDO PRINCIPAL */}
            <AnimatePresence mode={"wait"}>
                {screen === "Theme" && (
                    <ThemePrompt
                        key="theme"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        onNext={handleNext}
                    />
                )}
                {screen === "Duration" && (
                    <DurationPrompt key="duration"/>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
