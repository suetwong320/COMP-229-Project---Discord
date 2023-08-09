var express = require("express");
var router = express.Router();
const session = require("express-session");

/* GET home page. */
router.get("/", function (req, res, next) {
  const loggedInUsername = req.session.loggedInUsername;

  res.render("index", { title: "Discord", loggedInUsername });
});

router.get("/logout", (req, res, next) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(500).json({ message: "An error occurred" });
    }
    // Redirect to the login page after logout
    res.redirect("/login");
  });
});

// /* GET home page. */
// router.get("/login", function (req, res, next) {
//   res.render("login", { title: "Login" });
// });

// /* GET about page. */
// router.get("/register", function (req, res, next) {
//   res.render("register", { title: "Register" });
// });

// /* GET contact page. */
// router.get("/contact", function (req, res, next) {
//   res.render("index", { title: "Contact" });
// });

// /* GET project page. */
// router.get("/project", function (req, res, next) {
//   res.render("index", { title: "Project" });
// });

// /* GET service page. */
// router.get("/service", function (req, res, next) {
//   res.render("index", { title: "Service" });
// });

module.exports = router;
