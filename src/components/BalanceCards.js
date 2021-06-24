import React from "react";
import "./BalanceCards.css";

function BalanceCards() {
  return (
    <div className="balances">
      <div className="acctBalance">
        <div className="title">
          <h5 className="title-text">Total Account Balance</h5>
          <div className="title-currency">
            <p>USD</p>
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
