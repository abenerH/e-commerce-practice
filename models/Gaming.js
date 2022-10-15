const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const GamingSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please insert a name for this product"],
  },
  brand: String,
  description: String,
  price: Schema.Types.Decimal128,
});
