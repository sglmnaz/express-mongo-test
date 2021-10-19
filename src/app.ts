import express from 'express';
import { UserRoutes } from './routes/userRoutes';
import chalk from 'chalk';
import { connectToDb } from './db';
export const app = express();
app.use(express.json());

// Service port
const port = process.env.PORT || 8080;
// Connection URL
const url = process.env.DB_URL || 'mongodb://localhost:27017';
// Database Name
const dbName = process.env.DB_NAME || 'express-test';

connectToDb(url, dbName)
	.then((db: any) => {
		app.listen(port, () => {
			console.log(`Server running on port ${chalk.red(port)}`);
			//add routes
			new UserRoutes();
		});
	})
	.catch((error) => {
		console.log(error);
	});
