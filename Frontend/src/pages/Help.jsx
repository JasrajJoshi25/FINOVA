function Help() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>Help Center</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(37,99,235,.1)",
        }}
      >
        <h3>Expense Tracker</h3>
        <p>
          Add and monitor all your expenses.
          Data is securely stored in MongoDB.
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(37,99,235,.1)",
        }}
      >
        <h3>Budget Planner</h3>
        <p>
          Calculate savings and understand
          your monthly financial health.
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(37,99,235,.1)",
        }}
      >
        <h3>ITR Calculator</h3>
        <p>
          Estimate income tax and monthly
          tax burden quickly.
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(37,99,235,.1)",
        }}
      >
        <h3>Finova AI</h3>
        <p>
          Ask questions about budgeting,
          taxes, savings and expenses.
        </p>
      </div>
    </div>
  );
}

export default Help;