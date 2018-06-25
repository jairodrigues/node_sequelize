"use strict";

module.exports = (data, status, req, res) => {
  return res.status(status).json(data);
};
