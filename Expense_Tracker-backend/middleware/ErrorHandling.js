const errorHandle = (err, req, res, next) => {
  res.res.status(res.statusCode || 500).json({
    message: err.message,
    // stack show where file error occure and which line
    stack: err.stack,
  });
};
module.exports = errorHandle;
