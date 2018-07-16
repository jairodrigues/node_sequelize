import jwt from 'jwt-simple';
import * as db from '../config/db';
import * as config from '../config/index';

const gerarToken = async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      const { email, password } = req.body;
      const user = await db.User.findOne({ where: { email } });
      if (user == null) {
        res.status(500).json({ errorMessage: 'Usuário não possui cadastro' });
      }
      if (db.User.isPassword(user.password, password)) {
        const payload = { id: user.id };
        res.status(200).json({ token: jwt.encode(payload, config.jwtSecret) });
      } else {
        res.status(500).json({ errorMessage: 'Senha inválida' });
      }
    } else {
      res
        .status(500)
        .json({ errorMessage: 'Parametros email e senha necessários' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export default gerarToken;
