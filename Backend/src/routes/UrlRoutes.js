const router = require("express").Router();

const UrlController = require('../controllers/UrlController');

router.post("/shorten", UrlController.createShortUrl);
router.get("/:shortCode", UrlController.redirectUrl);

module.exports = router;