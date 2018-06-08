import { request } from "http";

describe("Routes: Token", () => {
  const db = app.models.index;

  describe("POST /token", () => {
    beforeEach(done => {
      db.User.destroy({ where: {} })
        .then(() =>
          db.User.create({
            name: "John",
            email: "john@mail.net",
            password: "12345"
          })
        )
        .then(() => done());
    });
    describe("status 200", () => {
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
  });
});
