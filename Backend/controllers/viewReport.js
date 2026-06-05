const { dataModel } = require("../Models/data");

async function viewReport(req, res) {
  try {
    const data = await dataModel.find({});

    const totals = {};

    data.forEach((transaction) => {
      const category = transaction.category;

      if (!totals[category]) {
        totals[category] = 0;
      }

      totals[category] += transaction.amount;
    });

    res.json(totals);
  } catch (err) {
    res.status(500).json({
      message: "Error generating report",
    });
  }
}

module.exports = {
  viewReport,
};