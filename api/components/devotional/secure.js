const auth = require("../../../auth");

module.exports = checkAuth = (action) => {
  const middleware = (req, _, next) => {
    switch (action) {
      case "owner":
        const owner = req.body.userId;
        auth.check.own(req, owner);
        next();
        break;
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
