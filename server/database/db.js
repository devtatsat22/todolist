import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {

const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-ksgdnle-shard-00-00.9kfdyjf.mongodb.net:27017,ac-ksgdnle-shard-00-01.9kfdyjf.mongodb.net:27017,ac-ksgdnle-shard-00-02.9kfdyjf.mongodb.net:27017/?ssl=true&replicaSet=atlas-y0n28u-shard-0&authSource=admin&retryWrites=true&w=majority` ;    
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database Connection Established');
    })

    mongoose.connection.on('disconnected',  () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error',  (error) => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;