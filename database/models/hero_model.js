const HeroSchema = require("./../schemas/hero_schema");
const mongoose = require("mongoose");

const HeroModel = mongoose.model("user", HeroSchema);

module.exports = HeroModel;
