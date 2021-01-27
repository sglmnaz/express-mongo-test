import express from 'express';
import { UserRoutes } from './routes/userRoutes';
import chalk from 'chalk'
export const app = express(); app.use(express.json());
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {

    res.status(200).send(`Hello this is the app index`)

});

app.listen(port, () => {
    console.log(`Server running on port ${chalk.red(port)}`)

    //add routes
    new UserRoutes

});
