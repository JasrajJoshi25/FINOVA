import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker";
import BudgetPlanner from "./pages/BudgetPlanner";
import ITR from "./pages/ITR";
import Chatbot from "./pages/Chatbot";
import Help from "./pages/Help";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<ExpenseTracker />} />
        <Route path="/itr" element={<ITR />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/help" element={<Help />} />
        <Route path="/budget" element={<BudgetPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;