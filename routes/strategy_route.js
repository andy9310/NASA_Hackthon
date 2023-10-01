const express = require("express");
const router = express.Router();
const Strategy = require("../models/strategy");

// get request
router.get("/", async (req, res) => {
  const strategies = await Strategy.find({});
  res.send(strategies);
});

// router.get("/resetCnt", async (req, res) => {
//   const strategies = await Strategy.find();
//   const ps = [];
//   const arr = await Promise.all(ps);
//   res.json(arr);
// });

// router.get("/:name", async (req, res) => {
//   const strategy = await Strategy.findOne({ stage: req.params.stage });
//   res.send(strategy);
// });

// router.get("/top/:count", async (req, res) => {
//   const strategies = await Strategy.find({})
//     .sort({ rate: -1 })
//     .limit(Number(req.params.count));
//   res.json(strategies);
// });

router.get("/random/:count", async (req, res) => {
  
  const allStrategy = await Strategy.find({});
  const count = req.params.count;
  const out = [];
  console.log(allStrategy)
  console.log("get in here");
  const indexs = randomNumbers(0, allStrategy.length, count);
  
  for (let i in indexs) {
    out.push(allStrategy[indexs[i]]);
  }
  res.json(out);
  
});

const randomNumbers = (min, max, count) => { // random choose stage
  const arr = [];
  if (max < count) {
    throw Error("not enough distinct values");
  }
  while (arr.length < count) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

router.post("/", async (req, res) => {
  const strategy = new Strategy(req.body);

  try {
    await strategy.save();
    res.send(strategy);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:stage", async (req, res) => {
  const update = {};
  const one_strategy = await Strategy.findOne({ stage: req.params.stage });
  if (req.body.stage) {
    update["stage"] = req.body.stage;
  }
  if (req.body.info) {
    update["info"] = req.body.info;
  }
  try {
    const updatedStrategy = await Strategy.updateOne(
      { stage: req.params.stage },
      {
        $set: update,
      }
    );
    res.json(updatedStrategy);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
