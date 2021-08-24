const express = require("express");
const router = express.Router();
// const User = require("../models/User");
// const restaurant = require("../models/Restaurant");
const controller = require("../controllers/restaurant.controller");
const verify = require("../verifyToken");

//GET all restaurants
router.get("/list", controller.getRests);
//GET restaurants by name
router.get("/:name", controller.restByName);
// //GET hotels by state
// router.get("/list/:state", controller.stateFilter);
// //GET hotels by ratings
// router.get("/list/rating/:rating", controller.rateFilter);

// router.post("/book", verify, controller.book);

module.exports = router;
