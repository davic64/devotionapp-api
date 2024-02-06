const auth = require("../../../auth");

module.exports = checkAuth = (action) => {
  const middleware = (req, _, next) => {
    switch (action) {
      case "logged":
        auth.check.logged(req);
        next();
        break;
      default:
        next();
    }
  };
  return middleware;
};
