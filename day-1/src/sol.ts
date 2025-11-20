import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// it is a static class so no need for new
const keypair = Keypair.generate();

const public_key = keypair.publicKey.toString();
const private_key = keypair.secretKey;

const public_key_bytes = keypair.publicKey.toBytes();
console.log(public_key_bytes);

console.log(public_key);
console.log(private_key);

const message = new TextEncoder().encode("hello world");

const signature = nacl.sign.detached(message, private_key);

const verify = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes()
)

console.log(verify);