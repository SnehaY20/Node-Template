const Sample = require("../models/sample.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const getSamples = asyncHandler(async (req, res) => {
  const samples = await Sample.find();
  res.status(200).json(samples);
});

module.exports = { getSamples };
