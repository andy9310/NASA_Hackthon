const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// import routes
const StrategyRoute = require("./routes/strategy_route");

const PORT = 5000;

app.use("/api/strategy", StrategyRoute);

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

mongoose.connect(
  process.env.DB_URL,
  (Option = { useNewUrlParser: true, useUnifiedTopology: true }),
  () => {
    console.log("connected to mongodb!");
  }
);

const dbConnection = mongoose.connection;
dbConnection.on('connected', () => {
  const dbName = dbConnection.db.databaseName;
  console.log('Connected to database: ' + dbName);
});
//app.post("/",(req,res)=>{res.send('hello world')});
app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
