import { useEffect, useState } from "react";
import API from "../services/api";
import "./expense.css";

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [report, setReport] = useState({});

  const [payer, setPayer] = useState("");
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const loadTransactions = async () => {
    try {
      const res = await API.get("/view");
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadReport = async () => {
    try {
      const res = await API.get("/report");
      setReport(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadTransactions();
    loadReport();
  }, []);

  const addTransaction = async () => {
    if (!payer || !payee || !amount) {
      alert("Fill all fields");
      return;
    }

    try {
      await API.post("/add", {
        payer,
        payee,
        amount: Number(amount),
        category,
      });

      setPayer("");
      setPayee("");
      setAmount("");

      loadTransactions();
      loadReport();
    } catch (err) {
      console.log(err);
    }
  };

  const totalExpense = transactions.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="expense-page">

      <h1>Expense Tracker</h1>

      <div className="summary-grid">

        <div className="summary-card">
          <h3>Total Transactions</h3>
          <h2>{transactions.length}</h2>
        </div>

        <div className="summary-card">
          <h3>Total Expense</h3>
          <h2>₹{totalExpense}</h2>
        </div>

      </div>

      <div className="tracker-card">

        <h2>Add Transaction</h2>

        <input
          placeholder="Payer"
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        />

        <input
          placeholder="Payee"
          value={payee}
          onChange={(e) => setPayee(e.target.value)}
        />

        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Rent</option>
          <option>Bills</option>
          <option>Healthcare</option>
          <option>Other</option>
        </select>

        <button onClick={addTransaction}>
          Add Transaction
        </button>

      </div>

      <div className="tracker-card">

        <h2>Category Report</h2>

        {Object.keys(report).length === 0 ? (
          <p>No report data</p>
        ) : (
          Object.entries(report).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <strong>{key}</strong>
              <span>₹{value}</span>
            </div>
          ))
        )}

      </div>

      <div className="tracker-card">

        <h2>Recent Transactions</h2>

        {transactions.map((t) => (
          <div
            key={t._id}
            className="transaction"
          >
            <span>{t.payer}</span>
            <span>{t.payee}</span>
            <span>{t.category}</span>
            <span>₹{t.amount}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ExpenseTracker;