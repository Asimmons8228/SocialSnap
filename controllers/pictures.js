const Picture = require("../models/picture");

async function index(req, res) {
  const pictures = await Picture.find({});
  res.render("pictures/index", { title: "All Pictures", pictures });
}

async function create(req, res) {
  try {
    const picture = await Picture.create(req.body);
    // Redirect to the new picture's show functionality
    res.redirect(`pictures/${picture._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("pictures/new", { errorMsg: err.message });
  }
}

function newPicture(req, res) {
  res.render("pictures/new", {
    user: req.user,
    title: "Welcome to SocialSnap!",
    errorMsg: "",
  });
}

module.exports = { index, create, new: newPicture };
