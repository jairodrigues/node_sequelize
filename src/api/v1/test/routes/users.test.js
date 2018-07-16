/*eslint-disable */

describe('USERS BDD', () => {
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

  describe('GET USERS', () => {
    it('Buscar todos os usuários', done => {
      request
        .get('/api/v1/users')
        .set('Authorization', `Bearer ${tokenFake}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body[0].name).to.equal('Rafaela');
          done(err);
        });
    });
    it('Buscar todos os usuários sem autorização', done => {
      request
        .get('/api/v1/users')
        .expect(401)
        .end((err, res) => {
          done(err);
        });
    });
  });

  describe('POST USER', () => {
    it('Criação de um usuário com sucesso', done => {
      request
        .post('/api/v1/users')
        .set('Authorization', `Bearer	${tokenFake}`)
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
    it('Criação de um usuário que já existe no sistema', done => {
      request
        .post('/api/v1/users')
        .set('Authorization', `Bearer	${tokenFake}`)
        .send({ name: 'Rafaela', email: 'rafa@teste.com', password: 'rafa123' })
        .expect(412)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.equal('Usuário já possui cadastro');
          done(err);
        });
    });
    it('Criação de usuário com paramentros fautantes ou errados', done => {
      request
        .post('/api/v1/users')
        .set('Authorization', `Bearer	${tokenFake}`)
        .send({ name: 'Rafaela', password: 'rafa123' })
        .expect(412)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          done(err);
        });
    });
    it('Criação de usuário sem autorização', done => {
      request
        .post('/api/v1/users')
        .expect(401)
        .end((err, res) => {
          done(err);
        });
    });
  });

  describe('FIND USER', () => {
    it('Buscar usuário cadastrado no sistema a partir de seu ID', done => {
      request
        .get('/api/v1/user/1')
        .set('Authorization', `Bearer	${tokenFake}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.id).to.equal(1);
          expect(res.body.email).to.equal('rafa@teste.com');
          expect(res.body.name).to.equal('Rafaela');
          done(err);
        });
    });
    it('Buscar usuário que não estão cadastrados no sistema', done => {
      request
        .get('/api/v1/user/2')
        .set('Authorization', `Bearer	${tokenFake}`)
        .expect(417)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          expect(res.body.errorMessage).to.equal(
            'Não foi possível buscar o Usuário solicitado'
          );
          done(err);
        });
    });
    it('Buscar usuário cadastrado sem autorização', done => {
      request
        .get('/api/v1/user/1')
        .expect(401)
        .end((err, res) => {
          done(err);
        });
    });
  });

  describe('PUT USER', () => {
    it('Alterar dados de usuário cadastrado no sistema', done => {
      request
        .put('/api/v1/user/1')
        .set('Authorization', `Bearer	${tokenFake}`)
        .send({ name: 'Jairo', email: 'jairo@teste.com', password: 'jairo123' })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.message).to.exist;
          expect(res.body.message).to.equal(
            'Dados do usuário alterados com sucesso'
          );
          done(err);
        });
    });
    it('Alterar dados de usuário que não está cadastrado no sistema', done => {
      request
        .put('/api/v1/user/2')
        .set('Authorization', `Bearer	${tokenFake}`)
        .send({ name: 'Jairo', email: 'jairo@teste.com', password: 'jairo123' })
        .expect(500)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          expect(res.body.errorMessage).to.equal('Usuário não encontrado');
          done(err);
        });
    });
    it('Alterar dados de usuário cadastrado no sistema sem autorização', done => {
      request
        .put('/api/v1/user/1')
        .expect(401)
        .end((err, res) => {
          done(err);
        });
    });
  });

  describe('DELETE USER', () => {
    it('Excluir usuário cadastrado no sistema', done => {
      request
        .delete('/api/v1/user/1')
        .set('Authorization', `Bearer	${tokenFake}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.message).to.exist;
          expect(res.body.message).to.equal('Usúario excluido com sucesso');
          done(err);
        });
    });
    it('Excluir usuário que não está cadastrado no sistema', done => {
      request
        .put('/api/v1/user/2')
        .set('Authorization', `Bearer	${tokenFake}`)
        .expect(500)
        .end((err, res) => {
          expect(res.body).to.exist;
          expect(res.body.errorMessage).to.exist;
          expect(res.body.errorMessage).to.equal('Usuário não encontrado');
          done(err);
        });
    });
    it('Excluir usuário cadastrado no sistema sem autorização', done => {
      request
        .put('/api/v1/user/1')
        .expect(401)
        .end((err, res) => {
          done(err);
        });
    });
  });
});
