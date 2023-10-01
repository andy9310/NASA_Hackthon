const mongoose = require("mongoose");

const StrategySchema = new mongoose.Schema({
  stage: {
    type: String,
    required: true,
    
  },
  info: {
    type: String, // the description of the strategy
  },
  picture:{
    type: String,
  }
});

module.exports = mongoose.model("strategy", StrategySchema);
