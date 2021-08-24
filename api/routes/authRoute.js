const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const verify = require("../verifyToken");

router.post("/register", controller.postRegistrationData);

router.post("/login", controller.postLoginData);

//auth with react-login
router.post("/oauthlogin", controller.postOuthLogin);

router.get("/isAuth", verify, (req, res) => {
  res.json({ ok: 1 });
});

module.exports = router;
