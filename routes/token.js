module.exports = app => {
  const TokenController = app.controllers.token;
  app.route("/token").post(TokenController.gerarToken);
};
