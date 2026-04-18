const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Protected routes
router.get('/profile', authenticateToken, AuthController.getProfile);

module.exports = router;
