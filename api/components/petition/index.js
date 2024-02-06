const store = require("../../../store/postgres");
const crtl = require("./controller");

module.exports = crtl(store);
