import jwt from "jwt-simple";

module.exports = function(app) {
  const cfg = app.infra.config;
  const Users = app.models.Users;

  this.gerarToken = async (req, res) => {
    try {
      if (req.body.email && req.body.password) {
        const email = req.body.email;
        const password = req.body.password;
        const user = await Users.findOne({ where: { email: email } });
        if (Users.isPassword(user.password, password)) {
          const payload = { id: user.id };
          res.status(200).json({ token: jwt.encoded(payload, cfg.jwtSecret) });
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
