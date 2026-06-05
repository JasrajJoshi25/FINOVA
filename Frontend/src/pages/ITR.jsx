import { useState } from "react";
import "./itr.css";

function ITR() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(0);

  const calculateTax = (value) => {
    let i = Number(value);
    let t = 0;

    if (i <= 250000) t = 0;
    else if (i <= 500000)
      t = (i - 250000) * 0.05;
    else if (i <= 1000000)
      t = 12500 + (i - 500000) * 0.2;
    else
      t = 112500 + (i - 1000000) * 0.3;

    setTax(Math.round(t));
  };

  return (
    <div className="itr-container">

      <div className="itr-header">
        <h1>Income Tax Calculator</h1>
        <p>Estimate your annual tax instantly</p>
      </div>

      <div className="itr-card">

        <input
          type="number"
          placeholder="Enter Annual Income"
          value={income}
          onChange={(e) => {
            setIncome(e.target.value);
            calculateTax(e.target.value);
          }}
        />

        <div className="result-box">

          <div className="result-item">
            <h3>Estimated Tax</h3>
            <h2>₹{tax}</h2>
          </div>

          <div className="result-item">
            <h3>Monthly Tax</h3>
            <h2>₹{Math.round(tax / 12)}</h2>
          </div>

        </div>

        <div className="info-box">
          <h3>💡 Tax Saving Tip</h3>
          <p>
            Invest in PPF, ELSS and LIC under Section 80C to reduce tax.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ITR;