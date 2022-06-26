import express from "express";
import { client } from "../utils/db.js";
import { ObjectId } from "mongodb";


export const getPlaylist =async(req,res)=>{

   const db = client.db("practice-mongo").collection("music");

  const result = await db.find({}).toArray();
  console.log(result);
  return res.json({ data: result });
}

