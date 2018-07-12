/*eslint-disable */

describe('Users', () => {
  const db = require('../../../../config/db');
  
  afterEach(async () => {
    await db.User.destroy({ where: {} });
  });

  beforeEach(async () => {
    await db.User.create({ id:2, name: 'Rafaela', email:'rafa@teste.com', password: 'rafa123'})
  });

  describe('Get Users', () => {
    it('usuário criado com sucesso', done => {
      request
        .get('/api/v1/users')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body[0].name).to.equal('Rafaela')
          done(err);
        });
    });
  });

  describe('Create User', () => {
    it('usuário criado com sucesso', done => {
      request
        .post('/api/v1/users')
        .send({ name: 'jairo', email: 'jairo.goncalves90@gmail.com', password: 'Acesso123' })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.message).to.equal('Usuário jairo Criado com sucesso');
          done(err);
        });
    });
    it('usuário já existe no sistema', done => {
      request
        .post('/api/v1/users')
        .send({ name: 'Rafaela', email: 'rafa@teste.com', password: 'rafa123' })
        .expect(412)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.equal('Usuário já possui cadastro');
          done(err);
        });
    });
    it('usuário não foi criado, erro de parametros', done => {
      request
        .post('/api/v1/users')
        .send({ name: 'Rafaela', password: 'rafa123' })
        .expect(412)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          done(err);
        });
    });
  });
});
