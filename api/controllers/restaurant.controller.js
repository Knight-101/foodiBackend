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

// exports.rateFilter = async (req, res, next) => {
//   try {
//     await Hotel.find({ Rating: req.params.rating })
//       .then((hotels) => {
//         res.status(200).json(hotels);
//       })
//       .catch((err) => {
//         res.status(404).json({ message: err });
//       });

//     //   await user.updateOne(newUserObject, { override: true, upsert: true });
//     //   const savedUser = await User.findById(user._id);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// exports.book = async (req, res) => {
//   await User.findOne({ email: req.userEmail }, (err, foundUser) => {
//     try {
//       if (foundUser) {
//         const newBook = req.body;
//         foundUser.bookings.push(newBook);
//         foundUser.save();
//         res.json({ ok: 1 });
//       } else {
//         res.send("User Not Found");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });
// };
