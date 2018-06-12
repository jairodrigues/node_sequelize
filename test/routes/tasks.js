import jwt from "jwt-simple";

describe("Routes: Tasks", () => {
  const models = app.models.index;
  const User = models.User;
  const Task = models.Tasks;

  const jwtSecret = app.infra.config.jwtSecret;
  let token;
  let fakeTask;

  beforeEach(done => {});

  describe("GET /tasks/", () => {
    describe("Status 200", () => {
      it("Retorna uma lista de tasks", done => {
        request
          .get("/tasks")
          .set("Authorization", `JWT ${token}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.have.length(2);
            expect(res.body[0].title).to.eql("Work");
            expect(res.body[1].title).to.eql("Study");
            done(err);
          });
      });
    });
    describe("Status 404", () => {
      it("Lança erro quando a task não existe", done => {
        request
          .get("/tasks/0")
          .set("Authorization", `JWT ${token}`)
          .expect(404)
          .end((err, res) => done(err));
      });
    });
  });

  describe("POST /tasks/", () => {
    describe("Status 200", () => {
      it("Criando uma nova task", () => {});
    });
  });
  describe("GET /tasks/:id", () => {
    describe("status 200", () => {
      it("Retorna Task especifica através de ID", done => {
        // Código de testes
      });
    });
    describe("status 404", () => {
      it("Retorna erro caso a task não exista", done => {
        // Código de testes
      });
    });
  });
  describe("PUT /tasks/:id", () => {
    describe("status 204", () => {
      it("Alteração da Task", done => {
        // Código de testes
      });
    });
  });
  describe("DELETE /tasks/:id", () => {
    describe("status 204", () => {
      it("Excluindo Task", done => {
        // Código de testes
      });
    });
  });
  describe("GET /tasks", () => {
    describe("status 200", () => {});
  });
});
