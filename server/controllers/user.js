import User from "../models/User.js";

const postApiv1Signup = async (req, res) => {
  const { userName, email, password, bankName, city } = req.body;
  const user = new User({
    userName,
    email,
    password,
    bankName,
    city,
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

export {postApiv1Signup}
