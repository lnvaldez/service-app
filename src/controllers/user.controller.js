const { User } = require("../models");

const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  let errors = [];

  if (password !== confirmPassword) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 8 characters" });
  }

  if (errors.length > 0) {
    return res.render("pages/register", {
      errors,
      name,
      email,
    });
  }

  try {
    await User.register(name, email, password);
    res.redirect("pages/login");
  } catch (error) {
    errors.push({ msg: error.message });
    res.render("pages/register", {
      errors,
      name,
      email,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = generateToken(user._id, user.role);

    req.session.token = token;

    res.redirect("/admin/dashboard");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };
