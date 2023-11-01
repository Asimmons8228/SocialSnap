const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const profileschema = new Schema(
    {
    name: { type: String, required: true},
    avatar: { type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, },
    }
  );

module.exports= mongoose.model("Profile", profileschema);