import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import playListRouter from "./apps/playlist.js";
import authRouter from "./apps/auth.js";
import { client } from "./utils/db.js";
import dotenv from "dotenv";

const app = express();

const port = 4000;

async function init(){
    await client.connect();// ให้ client excute ตัว connection

    dotenv.config();

    app.use(cors());
    app.use(bodyParser.json());
    
    app.use('/user',authRouter);
    app.use('/playlist',playListRouter);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
}

init();