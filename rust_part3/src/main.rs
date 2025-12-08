trait Shape{
    fn area(&self) -> u32;
}

struct Rect{
    width : u32,
    length : u32
}

impl Shape for Rect {
    fn area(&self) -> u32{
        return self.width * self.length;
    }
}

macro_rules! say_hellp{
    () => {
        println!("hellp");
    }
}

#[derive(Debug)]
struct User{
    name : String,
    password : String
}

fn main() {
    println!("Hello, world!");
    let r = Rect{
        width : 10,
        length : 10
    };
    get_area(r);

    let v = vec![1,23,4];
    println!("{:?}", v);

    say_hellp!();

    let u = User{
        name : String::from("Nikhil"),
        password : String::from("Nikhil"),
    };

    println!("{:?}", u);
    // println!("{}", u);
}

fn get_area<T : Shape>(s : T) -> u32{
    return s.area();
}
// generics and trait bounds
// annotations and decorators => java, python 

// macros =>  metaprograming (generation of code at compile time similar to function but they operate at syntactic level
    // they generate code before program is complied

// declarative macro => comand macro we use time to time like println!
    // macro rules
// procedural macro => simply implement the debug trait on user
    // custom derive macro
    // attribute macro
    // function macro vec!