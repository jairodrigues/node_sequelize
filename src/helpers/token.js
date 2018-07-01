import jwt from 'jwt-simple';
import * as db from '../config/db';
import * as config from '../config/index';

const gerarToken = async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      const { email, password } = req.body;
      const user = await db.User.findOne({ where: { email } });
      if (user == null) {
        res.status(401).json({ error: 'Usuário não possui cadastro' });
      }
      if (db.User.isPassword(user.password, password)) {
        const payload = { id: user.id };
        res.status(200).json({ token: jwt.encode(payload, config.jwtSecret) });
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

export default gerarToken;
