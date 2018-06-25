"use strict";

const HTTPStatus = require("http-status");

module.exports = (message, status, req, res) => {
  res.status(status).json({ error: message });
};
