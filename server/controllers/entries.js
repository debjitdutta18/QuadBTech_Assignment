const Entry = require("../models/entry");

//GET ALL ENTRIES
const getAllEntries = async(req,res) => {
    const entryData = await Entry.find({});
    res.status(200).json(entryData);
};

// //GET ALL ENTRIES WITH INR
const getEntryOne = async (req, res) => {
  try {
    const entries = await Entry.find({ name: /INR/ });
    const result = entries.map(entry => {
      const {  last, buy, sell, volume, name  } = entry;
      const profit = ((sell - buy) / buy) * 100;
      return { name,volume,last: `₹${last}`, buysell: `₹${buy}/₹${sell}`, profit: `${profit.toFixed(2)}%` };
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};


// //GET ALL ENTRIES WITH BTC
const getEntryTwo = async (req, res) => {
     try {
    const entries = await Entry.find({ name: /BTC/ });
    const result = entries.map(entry => {
      const {  last, buy, sell, volume, name  } = entry;
      const profit = ((sell - buy) / buy) * 100;
      return { name,volume,last: `₹${last}`, buysell: `₹${buy}/₹${sell}`, profit: `${profit.toFixed(2)}%` };
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// //GET ALL ENTRIES WITH USDT
const getEntryThree = async (req, res) => {
     try {
    const entries = await Entry.find({ name: /USDT/ });
    const result = entries.map(entry => {
      const {  last, buy, sell, volume, name  } = entry;
      const profit = ((sell - buy) / buy) * 100;
      return { name,volume,last: `₹${last}`, buysell: `₹${buy}/₹${sell}`, profit: `${profit.toFixed(2)}%` };
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// //GET ALL ENTRIES WITH WRX
const getEntryFour = async (req, res) => {
     try {
    const entries = await Entry.find({ name: /WRX/ });
    const result = entries.map(entry => {
      const {  last, buy, sell, volume, name  } = entry;
      const profit = ((sell - buy) / buy) * 100;
      return { name,volume,last: `₹${last}`, buysell: `₹${buy}/₹${sell}`, profit: `${profit.toFixed(2)}%` };
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};


module.exports = {
    getAllEntries, 
    getEntryOne,
    getEntryTwo,
    getEntryThree,
    getEntryFour,
}


