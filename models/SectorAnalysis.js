const mongoose = require("mongoose");

const SectorAnalysisSchema = new mongoose.Schema(
  {
    end_year: { type: String, default: "" },
    intensity: { type: Number, default: null },
    sector: { type: String, default: "" },
    topic: { type: String, default: "" },
    insight: { type: String, default: "" },
    url: { type: String, default: "" },
    region: { type: String, default: "" },
    start_year: { type: String, default: "" },
    impact: { type: String, default: "" },
    added: { type: Date, default: null },
    published: { type: Date, default: null },
    country: { type: String, default: "" },
    relevance: { type: Number, default: null },
    pestle: { type: String, default: "" },
    source: { type: String, default: "" },
    title: { type: String, default: "" },
    likelihood: { type: Number, default: null },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const SectorAnalysis = mongoose.model("SectorAnalysis", SectorAnalysisSchema);

module.exports = SectorAnalysis;
