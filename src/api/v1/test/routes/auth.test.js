/*eslint-disable */

describe('AUTH BDD', () => {
  const db = require('../../../../config/db');

  afterEach(async () => {
    await db.User.destroy({ where: {} });
  });

  beforeEach(async () => {
    await db.User.create({
      id: 1,
      name: 'Rafaela',
      email: 'rafa@teste.com',
      password: 'rafa123',
    });
  });

  describe('POST AUTH', () => {
    it('Gerar token para usuário cadastrado no sistema', done => {
      request
        .post('/api/v1/auth')
        .send({ email: 'rafa@teste.com', password: 'rafa123' })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.token).to.exist;
          done(err);
        });
    });
    it('Erro ao gerar token para usuário que não esta cadastrado no sistema', done => {
      request
        .post('/api/v1/auth')
        .send({ email: 'jairo@teste.com', password: 'rafa123' })
        .expect(500)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          expect(res.body.errorMessage).to.equal('Usuário não possui cadastro');
          done(err);
        });
    });
    it('Erro ao gerar token para usuário com senha inválida', done => {
      request
        .post('/api/v1/auth')
        .send({ email: 'rafa@teste.com', password: 'jairo123' })
        .expect(500)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          expect(res.body.errorMessage).to.equal('Senha inválida');
          done(err);
        });
    });
    it('Erro ao gerar token para usuário com parametros faltantes', done => {
      request
        .post('/api/v1/auth')
        .send({})
        .expect(500)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          expect(res.body.errorMessage).to.equal(
            'Parametros email e senha necessários'
          );
          done(err);
        });
    });
  });
});
