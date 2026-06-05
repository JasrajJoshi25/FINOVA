const mongoose = require("mongoose");

async function transactionDB() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/finova"
    );

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  transactionDB,
};