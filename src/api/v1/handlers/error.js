module.exports = (message, status, req, res) => {
  res.status(status).json({ errorMessage: message });
};
