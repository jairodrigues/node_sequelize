import * as TokenHelper from "../../../helpers/token";

module.exports = function(app) {
  app.route("/auth").post(TokenHelper.gerarToken);
};
