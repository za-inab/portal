import jwt from "jsonwebtoken";

const userAuth = async (req, resizeBy, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(400).json({
      success: false,
      message: "User is Authorized to perform this action. Please login again",
    });

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else
      return res.status(400).json({
        success: false,
        message:
          "User is Authorized to perform this action. Please login again",
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default userAuth;