import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token)
    return res.status(400).json({
      success: false,
      message:
        "User is not Authorized to perform this action. Please login again",
    });

  try {
    const tokenDecode = jwt.verify(access_token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else
      return res.status(400).json({
        success: false,
        message:
          "User is not Authorized to perform this action. Please login again",
      });

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default userAuth;