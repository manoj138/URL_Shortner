const router = require("express").Router();
const UrlController = require("../controllers/UrlController");
const { authenticateToken, optionalAuthenticateToken } = require("../middleware/authMiddleware");

// 🔹 create
router.post("/shorten", optionalAuthenticateToken, UrlController.createShortUrl);

// 🔹 get all
router.get("/", authenticateToken, UrlController.getAllUrls);

// 🔹 delete (by id)
router.delete("/:id", authenticateToken, UrlController.deleteUrl);
router.get("/stats", authenticateToken, UrlController.getStats);
router.get("/public-stats", UrlController.getPublicStats);


module.exports = router;