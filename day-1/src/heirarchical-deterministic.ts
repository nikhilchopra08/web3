import { generateMnemonic, mnemonicToSeed } from "bip39";

// for 12 word memonic, if have to create 24 word memonic we can do : 
// const memonics = generateMnemonic(256);
async function main(){
const memonics = generateMnemonic();
console.log(memonics);

const seed = await mnemonicToSeed(memonics);
console.log(seed);
}

main()