require("dotenv").config();
const axios = require('axios');
const connectDB = require("./db/connect");
const Entry = require("./models/entry");



const fetchTickers = async() => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickersData = response.data;
    const groupedTickersData = Object.values(tickersData).reduce((acc, curr) => {
      const quoteUnit = curr.quote_unit;
      if (!acc[quoteUnit]) {
        acc[quoteUnit] = [];
      }
      acc[quoteUnit].push(curr);
      return acc;
    }, {});
    const entryJson = [];
    Object.values(groupedTickersData).forEach(group => {
      const sortedGroup = group.sort((a, b) => b.volume - a.volume).slice(0, 10);
      sortedGroup.forEach(tickerData => {
        const entryObj = {
          base_unit: tickerData.base_unit,
          last: parseFloat(tickerData.last),
          volume: parseFloat(tickerData.volume),
          sell: parseFloat(tickerData.sell),
          buy: parseFloat(tickerData.buy),
          name: tickerData.name,
        };
        entryJson.push(entryObj);
      });
    });

    // Connect to MongoDB and save the entryJson data to the Entry collection
    await connectDB(process.env.MONGO_URL);
    await Entry.create(entryJson);
    console.log('Success: data has been saved to the database.');
  } catch (error) {
    console.log('Error:', error.message);
  }
}

fetchTickers();
