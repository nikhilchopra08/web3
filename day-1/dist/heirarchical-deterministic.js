"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
// for 12 word memonic, if have to create 24 word memonic we can do : 
// const memonics = generateMnemonic(256);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const memonics = (0, bip39_1.generateMnemonic)();
        console.log(memonics);
        const seed = yield (0, bip39_1.mnemonicToSeed)(memonics);
        console.log(seed);
    });
}
main();
