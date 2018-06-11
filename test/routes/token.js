describe("Routes: Token", () => {
  const db = app.models.index;

  describe("POST /token", () => {
    beforeEach(done => {
      db.User.destroy({ where: {} })
        .then(() =>
          db.User.create({
            name: "Jairo",
            email: "jairo@mail.com",
            password: "12345"
          })
        )
        .then(() => done());
    });
    describe("Token Criado com sucesso - status 200", () => {
      it("Retorna o token do usuario autenticado", done => {
        request
          .post("/token")
          .send({
            email: "jairo@mail.com",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.include.keys("token");
            done(err);
          });
      });
    });
    describe("Token não foi criado - status 401", () => {
      it('Senha incorreta', done => {
        request.post("/token")
          .send({
            email: "jairo@gmail.com",
            password: "SENHA_ERRADA"
          })          
          .end((err,res) => {
            expect(401)
            done(err)
          })
      });
      it('Email não econtrado', done => {
        request.post("/token")
          .send({
            email: "EMAIL_ERRADO",
            password: "12345"
          })          
          .end((err,res) => {
            expect(401)
            done(err)
          })
      });
      it('Senha e Email não enviados', done => {
        request.post("/token")
          .expect(401)
          .end((err,res) => {
            done(err)
          })
      })
    });
  });
});
