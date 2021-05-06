import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import Home from "./views/Home";

const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Poppins"', "sans-serif"],
        useNextVariants: true,
        fontWeight: "bold",
        color: "#42403e",
    },
    palette: {
        primary: {
            main: "#f19d3a",
        },
        text: {
            primary: "#fff",
        },
    },
    textColor: "#42403e",
    secondaryText: "#cad1d6",
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Home />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
