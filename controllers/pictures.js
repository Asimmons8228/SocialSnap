const Picture = require("../models/profile");

async function index(req, res) {
  const pictures = await Picture.find({});
  res.render("pictures/index", { title: "All Pictures", pictures });
}

async function create(req, res) {
  try {
    const picture = await Picture.create(req.body);
    // Redirect to the new movie's show functionality
    res.redirect(`/pictures/index`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("pictures/new", { errorMsg: err.message });
  }
}

module.exports = { index, create };
