const User = require('../models/UserModel');
const { generateToken } = require('../helper/authHelper');
const { handle201, handle200 } = require('../helper/successHandler');
const { handle400, handle404, handle401, formatMongoError } = require('../helper/mongoErrorHandler');

/**
 * Register a new user
 */
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return handle400(res, "Email already registered");
        }

        const user = await User.create({ name, email, password });

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        return handle201(res, userResponse, "User registered successfully");
    } catch (error) {
        return formatMongoError(res, error);
    }
};

/**
 * Login user
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return handle400(res, "Email and password are required");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return handle404(res, "User not found");
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return handle401(res, "Invalid credentials");
        }

        const token = generateToken({ id: user._id, name: user.name, role: user.role });

        const userResponse = user.toObject();
        delete userResponse.password;

        return handle200(res, { user: userResponse, token }, "Login successful");
    } catch (error) {
        return formatMongoError(res, error);
    }
};

/**
 * Get current user profile
 */
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return handle404(res, "User not found");
        }
        return handle200(res, user, "User profile fetched");
    } catch (error) {
        return formatMongoError(res, error);
    }
};

module.exports = {
    register,
    login,
    getProfile
};
