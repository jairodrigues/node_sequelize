import express from "express";
import consign from "consign";

var app = express();

consign({ verbose: false })
  .include("infra/config.js")
  .then("models/index.js")
  .then("auth.js")
  .then("infra/middlewares.js")
  .then("repository")
  .then("controllers")
  .then("routes")
  .then("infra/boot.js")
  .into(app);

module.exports = app;
