const mongoose = require("mongoose");
const { Schema } = mongoose;

const CheckListSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    Cost: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("CheckList", CheckListSchema);

