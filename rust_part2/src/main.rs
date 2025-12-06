struct Rect{
    height : f32,
    width : f32
}

impl Rect{
    fn area(&self) -> f32{
        return self.width * self.height;
    }

    fn something(){
        println!("hjvj");
    }
}

fn main() {
    let mut str = String::from("Nikhil");

    str.push_str("Chopra");
    // let len = get_len(&str);
    println!("{}", str);

    let s2:&mut String = &mut str;
    s2.push_str("Chopra");
    s2.push_str("Chopra");


    println!("{}", s2);

    println!("{}", str);

    let r = Rect{
        width : 10.0,
        height : 10.0
    };

    println!("{} {}, Area : {}", r.width, r.height, r.height * r.width);

    println!("{}", r.area());

    Rect::something();

}

// fn get_len(str : &String) -> usize{
//     return str.len();
// }

// borrowing , structs. and implement in rust
