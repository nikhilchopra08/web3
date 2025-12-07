// use std::f32::const::PI;

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

enum Shape{
    Square(f32),
    Circle(f32),
    Rectangle(f32, f32),
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

    println!();

    let shape_square = Shape::Square(10.0);
    let shape_circle = Shape::Circle(10.0);
    let shape_rectangle = Shape::Rectangle(10.0, 12.0);

    println!("{}",calculate_area(shape_rectangle));

}

fn calculate_area(s : Shape) -> f32{
    let area = match s {
        Shape::Circle(radius) => 3.14 * radius * radius,
        Shape::Square(side) => side * side,
        Shape::Rectangle(length, breadth) => length * breadth
    };

    return area;
}

// fn get_len(str : &String) -> usize{
//     return str.len();
// }

// borrowing , structs. and implement in rust
