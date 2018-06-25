import express from "express";
import consign from "consign";

var app = express();

consign({ cwd: "src" })
  .include("config")
  .then("middlewares")
  .then("api/v1/routes")
  .then("config/start.js")
  .into(app);

module.exports = app;
