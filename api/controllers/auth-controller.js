import User from "../models/user-model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// signup method
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields  are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json("SignUp successful");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields  are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const { password: pass, ...rest } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.SECRET_TOKEN);
    res
      .status(200)
      .cookie("access token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, photoURL } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access-token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generateNewPassword = Math.random().toString(36).slice(-8);
      const hashPassword = bcryptjs.hashSync(generateNewPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-3),
        email,
        password: hashPassword,
        photoURL,
      });
      console.log(newUser);
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.SECRET_TOKEN);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access-token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
