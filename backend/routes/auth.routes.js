const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyToken } = require('../middleware/auth.jwt')

router.post("/register", authController.register);
router.post("/login", authController.login);

// Google OAuth Routes
router.get("/google", authController.googleAuthRedirect);
router.get("/google/callback", authController.googleAuthCallback);

router.get("/test", verifyToken, (req, res) => {
    res.status(200).send("Protected route accessed. User ID: " + req.userId);
});


module.exports = router