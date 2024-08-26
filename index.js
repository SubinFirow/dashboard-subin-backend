require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/auth");
const dataRouter = require("./routes/data");

dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.DOMAIN,
  optionsSuccessStatus: 200,
};

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/api", dataRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
