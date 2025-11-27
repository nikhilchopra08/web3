const express = require("express");
const { userModel } = require("./models");
const { Keypair, Transaction, Connection } = require("@solana/web3.js");
const jwt = require("jsonwebtoken")

const conneciton = new Connection("https://solana-devnet.g.alchemy.com/v2/mRNVIzf44k3YCI1_eQPoO");

const app = express();
const JWT_SECRET = "123456"
app.use(express.json())

app.post("/api/v1/signup", async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    // validate the input, check the user exist or not and hash the password
    
    const  keyPair = new Keypair();

    await userModel.create({
        username : userName,
        password,
        publicKey : keyPair.publicKey,
        privateKey : keyPair.secretKey 
    })

    res.json({
        message : keyPair.publicKey.toString()
    })
})

app.post("/api/v1/signin", async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    const User = await userModel.findOne({
        username : userName,
        password : password
    })

    if(User){
        const token = jwt.sign({
            id : User
        }, JWT_SECRET)

        res.json({
            token
        })
    }else{
    res.status(403).json({
        message : "Wrong password"
    })
}
})

app.post("/api/v1/txn/sign", async (req, res) => {
    const serialized_transaction = req.body.message;

    const tx = Transaction.from(Buffer.from(serialized_transaction));
    const user = await userModel.find({
        where:{
            _id : ""
        }
    })

    const private_key = user.privateKey;
    const keypair = Keypair.fromSecretKey(private_key);

    tx.sign(keypair);

    const signature = await conneciton.sendTransaction(tx, [keypair]);
    console.log(signature);

    res.json({
        message : "Sign Up"
    })
})

app.get("/api/v1/txn", (req, res) => {
    res.json({
        message : "Sign Up"
    })
})

app.listen(3000);