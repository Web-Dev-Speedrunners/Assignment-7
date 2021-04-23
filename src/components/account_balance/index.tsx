import React, { useContext } from "react";

import { Typography, makeStyles } from "@material-ui/core";

import TransactionContext from "../../contexts/transaction";
import numWithCommas from "../../utils/numWCommas";

const useStyles = makeStyles({
  bborder: {
    border: "2px solid gray",
    width: "20em",
    margin: "2em auto",
    textAlign: "center",
    padding: "1.5em",
    borderRadius: "1em",
    boxShadow: "0 0 25px #777",
  },
  green: {
    color: "#85bb65",
  },
  red: {
    color: "#ff4040",
  },
});

const AccountBalance: React.FC = () => {
  const styleClass = useStyles();

  const { balance } = useContext(TransactionContext);

  return (
    <div>
      <div className={styleClass.bborder}>
        <Typography color="textSecondary" gutterBottom variant="h6">
          ACCOUNT BALANCE
        </Typography>
        <Typography
          color="textPrimary"
          variant="h5"
          className={balance >= 0 ? styleClass.green : styleClass.red}
        >
          ${`${numWithCommas(parseFloat(balance.toFixed(2)))}`}
        </Typography>
      </div>
    </div>
  );
};

export default AccountBalance;
