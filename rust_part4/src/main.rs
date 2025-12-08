use std::fmt::Display;

#[derive(Debug)]
struct User{
    username : String,
    age : u32,
}

impl Display for User{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result{
        write!(f, "this is user struct with age {}", self.age)
    }
}

#[derive(Debug, Copy, Clone)]
struct User1{
    is_male : bool,
    age : u32
}

fn main(){
    let u = User{
        username : String::from("Nikhil"),
        age : 21
    };

    // println!("{}", u.username);
    // println!("{}", u.age);

    println!("{}", u);
    println!("{:?}", u);

    let user1 = 2;
    let user2 = user1;

    println!("{}", user2);

    let male = User1{
        is_male : true,
        age : 32,
    };

    let male_two = male;

    print!("{:?}, {:?}", male, male_two);
}

/*
// debug trait and macro
// string ownership matters but int we create copy

if on stack memory we copy if on the heap we play ownership/borrowing
copy and clone traits


serde => serialization and deserialization framework in rust, provides a way to 
        convert rust data structure to different formats and vica versa
        common formats :  json , yaml , toml  
*/