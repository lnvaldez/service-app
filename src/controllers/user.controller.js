const Users = require("../models");

const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    console.log("Passwords must match");
  }

  try {
    const user = await Users.register(name, email, password);

    res.status(200).json({ name });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
