const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  createAccount,
  getAccountById,
  updateAccount,
  deleteAccount,
} = require("../controllers/account-controller");

router.route("/all").get(getAllAccounts).post(createAccount);
router
  .route("/:id")
  .get(getAccountById)
  .patch(updateAccount)
  .delete(deleteAccount);

module.exports = router;
