const { dataModel } = require("../Models/data");

async function viewData(req, res) {
  try {
    const data = await dataModel.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching data",
    });
  }
}

module.exports = {
  viewData,
};
