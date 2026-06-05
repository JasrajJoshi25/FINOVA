import { useState } from "react";
import "./budget.css";

function BudgetPlanner() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const savings = Number(income) - Number(expense);

    const rate =
      income > 0
        ? ((savings / income) * 100).toFixed(1)
        : 0;

    setResult({
      savings,
      rate,
    });
  };

  return (
    <div className="budget-page">

      <h1>Budget Planner</h1>

      <div className="budget-card">

        <input
          placeholder="Monthly Income"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <input
          placeholder="Monthly Expense"
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button onClick={calculate}>
          Analyze Budget
        </button>

      </div>

      {result && (
        <div className="budget-result">

          <div className="budget-box">
            <h3>Savings</h3>
            <h2>₹{result.savings}</h2>
          </div>

          <div className="budget-box">
            <h3>Savings Rate</h3>
            <h2>{result.rate}%</h2>
          </div>

        </div>
      )}

    </div>
  );
}

export default BudgetPlanner;