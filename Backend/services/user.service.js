const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  console.log(firstname, "user");
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = new userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  console.log(user, "user");

  return user;
};
