import chalk from 'chalk'
import { MongoClient } from 'mongodb'

export const connectToDb = (url: any, dbName: any) => {

    return new Promise((resolve: any, reject: any) => {
       
        // Use connect method to connect to the server
        MongoClient.connect(url , { useUnifiedTopology: true })
            .then((client) => {
                console.log('Connected to Database: ' + chalk.blue(dbName))
                resolve(client.db(dbName))
            })
            .catch((error) => {
                reject(error)
            })

    })
}