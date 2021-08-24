const Restaurant = require("../models/Restaurant");

exports.getRests = async (req, res, next) => {
  try {
    await Restaurant.find()
      .then((rests) => {
        res.status(200).json(rests);
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.restByName = async (req, res, next) => {
  try {
    await Restaurant.findOne({ Name: req.params.name }, (err, foundRest) => {
      try {
        if (foundRest) {
          res.json(foundRest);
        } else {
          res.send("Restaurant Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
