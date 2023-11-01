const Picture = require("../models/picture");
const Profile= require("../models/profile");

async function index(req, res) {
  const pictures = await Picture.find({});
  res.render("pictures/index", { title: "All Pictures", pictures });
}

async function create(req, res) {
  console.log(req.body)
  try {
    const profile = await Profile.create({
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user._id,
    })
    const picture = await Picture.create({
      piccontent: req.body.piccontent,
      caption: req.body.caption,
      user: req.user._id,
    });
    console.log(picture)
    // Redirect to the new picture's show functionality
    res.redirect('/pictures');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("pictures/new", { errorMsg: err.message });
  }
}

function newPicture(req, res) {
  res.render("pictures/new", {
    title: "Welcome to SocialSnap!",
    errorMsg: "",
  });
}

module.exports = { index, create, new: newPicture };
