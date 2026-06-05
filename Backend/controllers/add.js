const { dataModel } = require("../Models/data");

async function addData(req, res) {
  try {
    const transaction = await dataModel.create({
      payer: req.body.payer,
      payee: req.body.payee,
      amount: req.body.amount,
      category: req.body.category,
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({
      message: "Failed to add transaction",
    });
  }
}

module.exports = {
  addData,
};