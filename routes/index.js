const express = require("express");
const router = express.Router();

const pagesRoutes = require("./pages_routes");
const userRoutes = require("./user_routes");

router.get("/", (req, res) => {
    res.redirect("/pages");
});

router.use("/pages", pagesRoutes);

router.use("/user", userRoutes);

module.exports = router;
