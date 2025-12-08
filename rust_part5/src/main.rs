use serde::{Deserialize, Serialize};
use borsh::{BorshSerialize, BorshDeserialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
struct User{
    username : String,
    password : String
}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
struct MyStruct{
    username : String,
    password : String,
}

struct Userptr<'a>{
    username : &'a String,
    password : &'a String
}

fn main() {
    let u = User{
        username : String::from("Nikhil"),
        password : String::from("Nikhil")
    };

    let serialized_string = serde_json::to_string(&u);

    let s = serialized_string.unwrap();

    let deserialized_json: Result<User, serde_json::Error> = serde_json::from_str(&s);

    match deserialized_json{
        Ok(json) => println!("{:?}", json),
        Err(_) => println!("error")
    }

    println!("borsh after this");

    let original = MyStruct{
        username : String::from("Nikhil"),
        password : String::from("Nikhil")
    };

    let mut v: Vec<u8> = Vec::new();

    let ans = original.serialize(&mut v);

    match ans {
        Ok(_) => println!("{:?}", v),
        Err(_) => println!("Error")
    }
 
    let u = MyStruct::try_from_slice(&v);

    // println!("{:?}", u.unwrap());

    match u {
        Ok(us) => println!("{:?}", us),
        Err(_) => println!("kal aana"),
    }

    let str1 = String::from("Nikhil");
    let str2 = String::from("Yo yo");

    let ans = longest_string(&str1, &str2);

    println!("{}", ans);

    println!();

    let str1 = String::from("User");
    let str2 = String::from("User1");

    let up = Userptr{
        username : &str1,
        password : &str2
    };

    println!("{}", up.username);
}

fn longest_string<'a>(s1 : &'a String, s2 : &'a String) -> &'a String{
    if s1.len() > s2.len() {
        return s1
    }else{
        return s2
    }
}

/*
    borsh => binary object representation serialiser for hashing
    deterministic binary serialization format used in rust for encoding and decoding data in consistent way 
    converts data into bytes


    lifetime => how long a variable is valid for 
 */