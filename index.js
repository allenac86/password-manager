import PromptSync from "prompt-sync";
import clipboard from "clipboardy";

import Account from "./Account.js";
import generatePassword from "./password.js";
import getDateNow from "./date.js";

const prompt = PromptSync();

const url = prompt("Enter the URL: ");
const username = prompt("Enter your username: ");

const account = new Account(url, username, generatePassword(), getDateNow());

clipboard.writeSync(account.password);

console.log("your account details are:");
console.log(account.accountDetails);
console.log("your password has been copied to your clipboard");
