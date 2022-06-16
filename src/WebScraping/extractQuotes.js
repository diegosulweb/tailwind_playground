// const fetch = require("node-fetch");

import fetch from "node-fetch";
import cheerio from "cheerio";

// function to get the raw data
const getRawData = (URL) => {
  return fetch(URL)
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
};

const URL = "https://quotes.toscrape.com/";

const getQuotes = async () => {
  const quotesData = await getRawData(URL);
  // console.log(quotesData);
  const parsedQuotes = cheerio.load(quotesData);
  console.log(parsedQuotes);
};

getQuotes();
