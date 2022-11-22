import { MongoClient } from 'mongodb';
import { config } from "dotenv";
config();
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {});
let isConnected = false;
const connect = async () => {
    if(!isConnected){
        await client.connect();
        isConnected = true;
    }
}

export { connect, client };