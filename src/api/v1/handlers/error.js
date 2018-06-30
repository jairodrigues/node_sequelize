module.exports = (message, status, req, res) => {
  res.status = status;
  res.body = {
    errorMessage: message,
  };
};
