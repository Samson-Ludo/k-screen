import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "./BalanceCards.css";

const currencies = [
  {
    value: "USD",
    label: "USD",
  },
];

const useStyles = makeStyles(() => ({
  multilineColor: {
    color: "#000000",
    background: "#F5F5F5",
    marginLeft: "8px",
    paddingLeft: "5px",
    fontFamily: "Space Grotesk",
  },
}));

function BalanceCards() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("USD");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="balances">
      <div className="acctBalance">
        <div className="title">
          <h5 className="title-text">Total Account Balance</h5>
          <div className="title-currency">
            <TextField
              className="title-currency"
              select
              label=""
              value={currency}
              onChange={handleCurrency}
              InputProps={{
                className: classes.multilineColor,
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="amount">
          <div className="amount-figure">
            <h1>$5,332.18</h1>
            <p>1 USD = 381.97 NGN</p>
          </div>
          <div className="amount-currency">
            <p>KES</p>
            <hr />
            <p>NGN</p>
            <hr />
            <p>GHC</p>
          </div>
        </div>
      </div>

      <div className="acctBalance grey-bg">
        <div className="title">
          <h5 className="title-text">Funds on hold</h5>
        </div>
        <div className="amount">
          <div className="amount-figure">
            <h1>$5,332.18</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCards;
