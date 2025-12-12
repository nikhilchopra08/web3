import express from "express";
import cors from "cors"
import { prismaClient } from "db";
import { authMiddleware } from "./middleware";
import { SignupSchema } from "common/inputs"
import jwt from "jsonwebtoken"

const app = express();
app.use(cors);
app.use(express.json());

app.post("/signin", async (req, res) => {
    const {success, data} = SignupSchema.safeParse(req.body);
    if(!success){
        res.status(403).json({
            message : "incorrect credentials"
        })
        return;
    }

    const email = data.email;
    const password = data.password;

    const user = await prismaClient.user.findFirst({
        where:{
            email
        }
    });

    if(!user){
        res.status(403).json({
            message : "User not found",
        })
        return;
    }

    if(user.password != password){
        res.status(403).json({
            message : "incorrect",
        })
        return;
    }

    const token = jwt.sign({
        userId: user.id
    }, process.env.JWT_SECRET!);
    
    res.json({
        token
    })

})

app.get("/calender", authMiddleware, (req, res) => {

})

app.listen(process.env.PORT || 3000);