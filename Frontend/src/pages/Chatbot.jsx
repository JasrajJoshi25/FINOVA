import { useState } from "react";
import "./chatbot.css";

function Chatbot() {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Finova AI. Ask me about savings, budgeting, taxes or expenses.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message;
    const lower = userMessage.toLowerCase();

    let reply =
      "I'm still learning. Try asking about budgeting, tax filing, savings or expenses.";

    if (lower.includes("save")) {
      reply =
        "Try following the 50-30-20 rule: 50% Needs, 30% Wants, 20% Savings.";
    }

    if (lower.includes("tax")) {
      reply =
        "You can reduce tax through Section 80C investments like PPF, ELSS and LIC.";
    }

    if (lower.includes("expense")) {
      reply =
        "Track expenses regularly and review category-wise spending every month.";
    }

    if (lower.includes("budget")) {
      reply =
        "Create a monthly budget and aim for a savings rate above 20%.";
    }

    setChat([
      ...chat,
      {
        sender: "user",
        text: userMessage,
      },
      {
        sender: "bot",
        text: reply,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="chat-container">

      <h1>Finova AI Assistant</h1>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "user-message"
                : "bot-message"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="quick-actions">

        <button
          onClick={() =>
            setMessage("How can I save money?")
          }
        >
          Save Money
        </button>

        <button
          onClick={() =>
            setMessage("Tell me about tax")
          }
        >
          Tax Help
        </button>

        <button
          onClick={() =>
            setMessage("Budget tips")
          }
        >
          Budget Tips
        </button>

      </div>

      <div className="input-area">

        <input
          type="text"
          placeholder="Ask a finance question..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  );
}

export default Chatbot;