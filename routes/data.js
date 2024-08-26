const express = require("express");
const {
  getData,
  addData,
  getFilterData,
} = require("../controllers/dataController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/data", authMiddleware, addData);
router.get("/data", authMiddleware, getData);
router.post("/filterData", authMiddleware, getFilterData);

module.exports = router;
