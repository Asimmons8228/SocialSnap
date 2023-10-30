const Picture = require("../models/profile");

module.exports = {
  create,
};

async function create(req, res) {
  const picture = await Picture.findById(req.params.id);
  req.body.user = req.user._id;
  req.nody.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  // We can push (or unshift) subdocs into Mongoose arrays
  picture.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await picture.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/pictures/new`);
}
