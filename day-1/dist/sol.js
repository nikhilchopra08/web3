"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
// it is a static class so no need for new
const keypair = web3_js_1.Keypair.generate();
const public_key = keypair.publicKey.toString();
const private_key = keypair.secretKey;
const public_key_bytes = keypair.publicKey.toBytes();
console.log(public_key_bytes);
console.log(public_key);
console.log(private_key);
const message = new TextEncoder().encode("hello world");
const signature = tweetnacl_1.default.sign.detached(message, private_key);
const verify = tweetnacl_1.default.sign.detached.verify(message, signature, keypair.publicKey.toBytes());
console.log(verify);
