const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  base_unit: { type: String, required: true },
  last: { type: Number, required: true },
  volume: { type: Number, required: true },
  sell: { type: Number, required: true },
  buy: { type: Number, required: true },
  name: { type: String, required: true },
})

const Entry = new mongoose.model("Entry", entrySchema);
module.exports = Entry;




