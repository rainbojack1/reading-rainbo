const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  title: { type: String},
  authors: { type: Array}
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;
