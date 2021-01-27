import express from 'express';
import { UserRoutes } from './routes/userRoutes';
import chalk from 'chalk';
import { connectToDb } from './db';
export const app = express(); app.use(express.json());
import { Collection, Db, MongoClient } from 'mongodb'
import { User } from './interfaces/userInterface';


// Service port
const port = process.env.PORT || 8080;
// Connection URL
const url = process.env.DB_URL || 'mongodb://localhost:27017';
// Database Name
const dbName = process.env.DB_NAME ||  'express-test';

connectToDb(url, dbName)

    .then((db:any) => {

        app.get('/', (req, res) => {

            // const CollectionName = 'users'
            // const collection : Collection = db.collection(CollectionName)
            // collection.insertOne({
            //     email : "francesca.capodanno@synclab.it",
            //     username : "francesca.capodanno",
            //     password : "nando_01"        
            // })
            // .then(()=>console.log('post succesfull'))
            res.status(200).send(`Hello this is the app index`)
        
        });
        
        app.listen(port, () => {
        
            console.log(`Server running on port ${chalk.red(port)}`)
        
            //add routes
            new UserRoutes
        
        });

    })

    .catch((error) => {
        console.log(error);
    })