const Account = require("../models/Account");
const asyncHandler = require("../middleware/asyncHandler");
const generatePassword = require("../password");

const getAllAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find({});
  res.status(200).json({ numAccounts: accounts.length, accounts });
});

const createAccount = asyncHandler(async (req, res) => {
  const account = await Account.create({
    url: req.body.url,
    username: req.body.username,
    password: generatePassword(),
  });
  res.status(201).json({ msg: "Account created", account });
});

module.exports = {
  getAllAccounts,
  createAccount,
};
