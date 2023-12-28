import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, contact, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      contact,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log("error");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(400).json({
        message: "user not exist!",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "password is incorrect!",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        isadmin:user.isadmin
      },
      process.env.JWT_KEY,{
        expiresIn:"3d"
      }
    );
    delete user.password;
    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
    console.log("error");
  }
};
