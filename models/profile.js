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
    profileName: { type: String, ref: "User" },
    profileAvatar: { type: String, ref: "User" },
  },
  { timestamps: true }
);

const picSchema = new Schema({
  piccontent: { type: String, required: true },
  caption: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  profileAvatar: { type: String, ref: "User" },
  comments: [commentSchema],
});

const Picture = mongoose.model("Picture", picSchema);
module.exports = { Picture };
