const express = require("express");
const connectToDB = require("./database/database");
const accountRoutes = require("./routes/account-routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4200;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/passwords-manager", accountRoutes);

app.use(notFound);
app.use(errorHandler);

// connect to mongoDB before server starts or throw an error
const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
