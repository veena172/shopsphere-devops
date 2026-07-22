const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    console.log("========== AUTH MIDDLEWARE ==========");
    console.log("Authorization Header:", req.headers.authorization);

    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      console.log("❌ No Token Received");

      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided",
      });
    }

    token = token.split(" ")[1];

    console.log("Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Decoded Token:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("❌ JWT Verify Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = protect;