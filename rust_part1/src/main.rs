fn main() {
    let ans : u32 = sum(255, 255);
    println!("{}", ans);

    println!("{}", is_even(32));

    let arr: [i32 ; 5] = [1, 2, 3, 4, 5];
    println!("{}", arr.len());
    println!("{}", arr[1]);

    println!();
    let greeting = String::from("Hello World");
    println!("{}", greeting);

    let name: &str = "Nikhil";
    println!("{}", name);

    let vec = vec![1,2,3];
    println!("{:?}", vec);
}

fn sum(a : u32, b : u32) -> u32{
    return a + b;
}

fn is_even(a : i32) -> bool{
    return a % 2 == 0;
}