import { MongoClient } from "mongodb";//// Named Import ตัว MongoClient มาจาก "mongodb"

const connectionString ="mongodb://localhost:27017";  // URL link ตัว node ไปหา database

export const  client = new MongoClient(connectionString,{ useUnifiedTopology: true,}); // Initialize ตัว mongo client รับ input 2 ตัว