const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  payer: {
    type: String,
    required: true,
  },
  payee: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const dataModel = mongoose.model("transaction", dataSchema);

module.exports = {
  dataModel,
};