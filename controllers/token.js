import jwt from "jwt-simple";

module.exports = function(app) {
  const cfg = app.infra.config;
  const User = app.models.index.User

  this.gerarToken = async (req, res) => {
    try {
      if (req.body.email && req.body.password) {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ where: { email: email } });
        console.log("XXX=>", User.isPassword(user.password, password))
        if (User.isPassword(user.password, password)) {
          const payload = { id: user.id };
          res.status(200).json({ token: jwt.encode(payload, cfg.jwtSecret) });
        } else {
          res.status(401).json({ msg: error.message });
        }
      } else {
        res.status(401).json({ msg: error.message });
      }
    } catch (error) {
      res.status(401).json({ msg: error.message });
    }
  };
  return this;
};
