module.exports = (data, status, req, res) => {
  res.status(status).json(data);
};
