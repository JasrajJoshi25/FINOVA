import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <nav className="navbar">
        <h2 className="logo">FINOVA</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/expenses">Expense Tracker</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Smart Finance Made Simple</h1>

        <p>
          Track expenses, manage your budget and understand your finances
          using FINOVA.
        </p>

        <Link to="/expenses">
          <button className="btn">
            Open Expense Tracker
          </button>
        </Link>
        <Link to="/budget">
          <button className="btn">
            Budget Planner
          </button>
        </Link>
        <Link to="/itr">
          <button className="btn">
            ITR Calculator
          </button>
        </Link>
        <Link to="/chatbot">
          <button className="btn">
            AI Assistant
          </button>
        </Link>
        <Link to="/help">
          <button className="btn">
            Help Center
          </button>
        </Link>
      </section>

      <section className="features">

        <div className="card">
          <h3>Expense Tracker</h3>
          <p>Track all your transactions and store them securely.</p>
        </div>

        <div className="card">
          <h3>Budget Planner</h3>
          <p>Analyze spending and improve savings habits.</p>
        </div>

        <div className="card">
          <h3>Reports</h3>
          <p>View category-wise financial summaries.</p>
        </div>

      </section>

      <section className="dashboard-preview">

        <h2>Your Financial Overview</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>₹ --</h3>
            <p>Current Balance</p>
          </div>

          <div className="stat-card">
            <h3>₹ --</h3>
            <p>Income</p>
          </div>

          <div className="stat-card">
            <h3>₹ --</h3>
            <p>Expenses</p>
          </div>

          <div className="stat-card">
            <h3>₹ --</h3>
            <p>Savings</p>
          </div>

        </div>

      </section>

      <footer className="footer">
        <h3>FINOVA</h3>
        <p>Smart Finance Made Simple</p>
      </footer>

    </div>
  );
}

export default Home;