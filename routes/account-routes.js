const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/account-controller");

router.route("/").get(getAllAccounts).post(createAccount);
router.route("/:id").get(getAccount).patch(updateAccount).delete(deleteAccount);

module.exports = router;
