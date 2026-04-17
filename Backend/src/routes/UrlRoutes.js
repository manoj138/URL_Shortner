const router = require("express").Router();
const UrlController = require("../controllers/UrlController");

// 🔹 create
router.post("/shorten", UrlController.createShortUrl);

// 🔹 get all
router.get("/", UrlController.getAllUrls);

// 🔹 delete (by id)
router.delete("/:id", UrlController.deleteUrl);


module.exports = router;