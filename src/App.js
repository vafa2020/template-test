import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "./App.css";
import Main from "./component/Main/Main";
import Sidebar from "./component/sidebar/Sidebar";

const theme = createTheme({
  direction: "rtl",
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl" className="App">
        <Sidebar />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
