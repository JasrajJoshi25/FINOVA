const express = require("express");
const cors = require("cors");

const { addData } = require("./Controllers/add");
const { viewData } = require("./Controllers/view");
const { viewReport } = require("./Controllers/viewReport");

const { transactionDB } = require("./connection");

const app = express();

transactionDB();

app.use(cors());
app.use(express.json());

app.post("/add", addData);
app.get("/view", viewData);
app.get("/report", viewReport);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});