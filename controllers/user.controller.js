const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    try {
      const data = req.body;
      const user = await User.findOne({ where: { email: data.email } });

      if (!user || !bcrypt.compareSync(data.password, user.password)) {
        res.status(401).json({
          message: "email atau password tidak valid",
        });
      } else {
        const payload = { user_id: user.id };
        const access_token = jwt.sign(payload, process.env.SECRET_KEY);
        res.status(200).json({
          message: "login sukses!",
          token: access_token,
          userId: payload,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "Akun berhasil di buat!",
        data: {
          name: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
};
