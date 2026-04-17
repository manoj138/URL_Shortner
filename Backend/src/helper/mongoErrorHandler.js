// helper/errorHandler.js

/**
 * Formats Mongoose errors into flat object (like Sequelize style)
 */
const formatMongoError = (res, error) => {
  let errors = {};

  // ✅ Validation Error (required, enum, minlength, etc.)
  if (error.name === "ValidationError") {
    Object.values(error.errors).forEach((err) => {
      errors[err.path] = err.message;
    });

    return res.status(422).json({
      status: false,
      errors
    });
  }

  // ✅ Duplicate Key Error (unique field)
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue || {})[0];

    errors[field || "duplicate"] = `${field} already exists`;

    return res.status(422).json({
      status: false,
      errors
    });
  }

  // ✅ Invalid ObjectId (CastError)
  if (error.name === "CastError") {
    errors[error.path] = `Invalid ${error.path}`;

    return res.status(422).json({
      status: false,
      errors
    });
  }

  // ✅ Mongo Server Error
  if (error.name === "MongoServerError") {
    errors.database = error.message;

    return res.status(422).json({
      status: false,
      errors
    });
  }

  // ✅ Fallback (500)
  return handle500(res, error);
};

/**
 * 404 Not Found
 */
const handle404 = (res, message = "Resource not found") => {
  return res.status(404).json({
    status: false,
    errors: {
      route: message
    }
  });
};

/**
 * 401 Unauthorized
 */
const handle401 = (res, message = "Session expired, please login again") => {
  return res.status(401).json({
    status: false,
    errors: {
      auth: message
    }
  });
};

/**
 * 422 Manual validation errors
 */
const handle422 = (res, errors = {}) => {
  return res.status(422).json({
    status: false,
    errors
  });
};

/**
 * 500 Internal Server Error
 */
const handle500 = (res, error) => {
  console.error("Internal Server Error:", error);

  return res.status(500).json({
    status: false,
    errors: {
      server: error?.message || "Internal Server Error"
    }
  });
};

module.exports = {
  formatMongoError,
  handle404,
  handle401,
  handle422,
  handle500
};