const { User } = require("../user/model");
const { verifyPassword } = require("../../../utils/cryptPass");
const auth = require("../../../auth");

module.exports = (injectedStore) => {
  const store = injectedStore;

  const login = async (email, password) => {
    const dataUser = await store.get(User, { email });
    if (!dataUser)
      throw Object.assign(
        new Error("El email con el que intentas acceder no está registrado"),
        { statusCode: 404 }
      );
    verifyPassword(password, dataUser.password);

    const { name, location, id, email: userEmail } = dataUser;

    return {
      user: {
        name,
        userEmail,
        location,
        id,
      },
      token: auth.sign({ dataUser }),
    };
  };

  return {
    login,
  };
};
