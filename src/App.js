import React, { useState } from "react";
import "./App.css";
import { default as key_sound } from "./key_sound";
import Landing from "./components/Landing";
import Paper from "./components/Paper";

function App() {
    const [gotIt, setGotIt] = useState(false);

    if (!gotIt) {
        return <Landing {...{ gotIt, setGotIt }} />;
    } else {
        return (
            <>
                <Paper />
            </>
        );
    }
}

export default App;
