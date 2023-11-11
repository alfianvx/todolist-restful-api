// get userId from req param for authentiace user only to get easyly data fetch without
// put token in headers manualy

const auth = (req, res, next) => {
  try {
    if (req.params.userId) {
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: "terjadi kesalahan server",
      error: error.message,
    });
  }
};

module.exports = auth;
