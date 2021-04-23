import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MUIThemeOptions from "./config/mui_theme_options";
import { TransactionContextProvider } from "./contexts/transaction";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={createMuiTheme(MUIThemeOptions)}>
        <TransactionContextProvider>
          <App />
        </TransactionContextProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
