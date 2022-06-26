import { Router } from "express";
import { client } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRouter = Router();

const dbUser = client.db("practice-mongo").collection("users");

authRouter.post('/register',async(req,res)=>{
    const user={
    username:req.body.username,
     password:req.body.password,
     firstName:req.body.firstName,
     lastName:req.body.lastName
    }
const salt = await bcrypt.genSalt(10);
 user.password = await bcrypt.hash(user.password,salt);

 await dbUser.insertOne(user)
 return res.json({
     message:'User has been created'
 })
});

authRouter.post('/login',async(req,res)=>{
    const user=await dbUser.findOne({username:req.body.username});

    if(!user){
        return res.status(404).json({
            message:"Not found User"
        });
    }
    
    const isPassword = await bcrypt.compare(
        req.body.password,
        user.password,
    );

    if(!isPassword){
        return res.status(404).json({
            message:"Password not collect"
        });
    }

    // Generate Token
    const token=jwt.sign(
        {id:user._id,firstName:user.firstName,lastName:user.lastName},
        process.env.SECRET_KEY,
        {
            expiresIn:900000,
        }

    )

    return res.json({
        message:"Login OK",
        token
    })
        
})

export default authRouter;