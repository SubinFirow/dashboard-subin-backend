const fs = require("fs");
const path = require("path");
const SectorAnalysis = require("../models/SectorAnalysis");

const addData = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../jsondata.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await SectorAnalysis.insertMany(data);

    res.status(201).json({ message: "Data added successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getData = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const data = await SectorAnalysis.find()
      .sort({ createdAt: -1 })
      .skip(page * limit)
      .limit(parseInt(limit));

    const total = await SectorAnalysis.countDocuments();

    res.status(200).json({
      message: "Data fetched successfully",
      data,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getFilterData = async (req, res) => {
  try {
    const { sector, country, topic } = req.body;

    const query = {};
    if (sector) query.sector = sector;
    if (country) query.country = country;
    if (topic) query.topic = topic;

    const data = await SectorAnalysis.find(query).sort({ createdAt: -1 });
    const total = await SectorAnalysis.countDocuments(query);

    res.status(200).json({
      message: "Data fetched successfully",
      data,
      totalItems: total,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { addData, getData, getFilterData };
