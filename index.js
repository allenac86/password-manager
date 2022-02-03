const express = require('express');
const connectToDB = require('./database/database');
const accountRoutes = require('./routes/account-routes');
require('dotenv').config();

const PORT = process.env.port || 4200;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.redirect('/api/v1/passwords');
});

app.use('/api/v1/passwords', accountRoutes);

const start = async () => {
	try {
		await connectToDB(process.env.MONGO_URI);
		app.listen(PORT, console.log(`Server listening on port ${PORT}`));
	} catch (err) {
		console.error(err);
	}
};

start();