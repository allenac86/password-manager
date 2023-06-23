require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/database');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const accountRoutes = require('./routes/account-routes');
const authRoutes = require('./routes/auth-routes');

const PORT = process.env.API_PORT || 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.redirect('/api/v1/users/login');
});

app.use('/api/v1/users', authRoutes);
app.use('/api/v1/passwords-manager', accountRoutes);

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
