import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar";
import AppRouter from "./routes";
import {
  GetInitialCreditTransactions,
  GetInitialDebitTransactions,
} from "./services/initial_transactions";
import "./app.css";
import AccountBalance from "./components/account_balance";

const App: React.FC = () => {
  useEffect(() => {
    GetInitialDebitTransactions();
    GetInitialCreditTransactions();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <AccountBalance />
        <AppRouter />
      </Container>
    </div>
  );
};

export default App;
