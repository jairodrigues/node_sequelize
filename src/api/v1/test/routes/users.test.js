/*eslint-disable */

describe('Users', () => {
  const db = require('../../../../config/db');
  afterEach(async () => {
    await db.User.destroy({ where: {} });
  });

  beforeEach(async () => {});

  describe('Create User', () => {
    it('usuário criado com sucesso', done => {
      request
        .post('/api/v1/users')
        .send({
          name: 'jairo',
          email: 'jairo.goncalves90@gmail.com',
          password: 'Acesso123',
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.message).to.equal('Usuário jairo Criado com sucesso');
          done(err);
        });
    });
  });
});
