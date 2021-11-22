import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "./App.css";
import Main from "./component/Main/Main";
import Navigation from "./component/navigation/Navigation";

const theme = createTheme({
  direction: "rtl",
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl" className="App">
        <Navigation />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
