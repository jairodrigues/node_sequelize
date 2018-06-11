module.exports = function(app) {
  console.log(app)
  const TokenController = app.controllers.token;
  app.route("/token").post(TokenController.gerarToken);
};
