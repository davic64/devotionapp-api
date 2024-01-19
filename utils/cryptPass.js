const bcryptjs = require("bcryptjs");

const cryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync();
  const crypted = bcryptjs.hashSync(password, salt);
  return crypted;
};

const verifyPassword = (password, userPassword) => {
  const validPassword = bcryptjs.compareSync(password, userPassword);
  if (!validPassword)
    throw Object.assign(
      new Error("Password doesn't match the email provided"),
      { statusCode: 401 }
    );
};

module.exports = {
  cryptPassword,
  verifyPassword,
};
