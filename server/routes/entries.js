const express = require("express");
const router = express.Router();
const {
    getAllEntries,
    getEntryOne,
    getEntryTwo,
    getEntryThree,
    getEntryFour,
} = require("../controllers/entries");


router.route("/all").get(getAllEntries);
router.route("/inr").get(getEntryOne);   
router.route("/btc").get(getEntryTwo);
router.route("/usdt").get(getEntryThree);
router.route("/wrx").get(getEntryFour);

module.exports = router;