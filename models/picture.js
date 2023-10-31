const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const profileschema = new Schema(
  {
  name: { type: String, required: true},
  avatar: { type: Image, required: true},
  user: { type: Schema.Types.ObjectId, ref: "User", required: true, },
  }
);

const picSchema = new Schema({
  piccontent: { type: String, required: true },
  caption: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [commentSchema],
});

module.exports = mongoose.model("Picture", picSchema);
module.exports= mongoose.model("Profile", profileschema);
