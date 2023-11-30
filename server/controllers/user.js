import User from "../models/User.js";

const postApiv1Signup = async (req, res) => {
  const { userName, email, password, bankName, city, mobileNumber } = req.body;
  const user = new User({
    userName,
    email,
    password,
    bankName,
    city,
    mobileNumber,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json({
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.status(204).json({
      success: false,
      message: err.message,
    });
  }
};

const postApiv1Login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(203).json({
      success: false,
      message: "Please provide  email and password",
    });
  }
  try {
    const user = await User.findOne({
      email: email,
      password: password,
    }).select("userName email password");

    if (user) {
      return res.status(200).json({
        success: true,
        data: user,
        message: "you have logged in successfully",
      });
    } else {
      return res.status(203).json({
        success: false,
        message: "invalid credentials",
      });
    }
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

export { postApiv1Signup, postApiv1Login };
