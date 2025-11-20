import * as ed from '@noble/ed25519';

async function main(){
    const private_key = ed.utils.randomSecretKey();
    
    const message = new TextEncoder().encode("hello");

    const public_key = await ed.getPublicKeyAsync(private_key);

    const signature = await ed.signAsync(message, private_key);

    // if someone tries to pass any other message then the block wouldnt be valid and cause error
    // that is why it is secure
    const message2 = new TextEncoder().encode("hello world");

    const isValid = await ed.verifyAsync(signature, message, public_key)

    console.log(isValid);
}

main();