export default class Account {
  constructor(url, username, password) {
    this.url = url;
    this.username = username;
    this.password = password;
  }

  editURL(newUrl) {
    const oldUrl = this.url;
    this.url = newUrl;
    console.log(`URL changed from ${oldUrl} to ${this.url}`);
  }

  get accountDetails() {
    return {
      URL: this.url,
      username: this.username,
      password: this.password,
    };
  }
}
