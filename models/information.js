const mongoose = require("mongoose");

const InformationSchema = mongoose.Schema({
  stage: String,
  id :{
    type: int,
    unique: true,
  },
  data: String,
  info: String, 
  picture: String,
});

module.exports = mongoose.model("Infos", InformationSchema);
