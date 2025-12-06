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

    for i in 0..100{
        println!("{}", i);
    }

    let mut x : u32 = 0;
    println!("{}", x);
    x = 1;
    println!("{}", x);

    let mut name = String::from("Nikhil ");
    println!("{}", name);

    name.push_str("Chopra");
    println!("{}", name);
    
    let name1 = String::from("Nikhil");
    let (len, name1) = get_len(name1);
    println!("{}", len);

    println!("the name is {}", name1);

}

fn get_len(s : String) -> (usize, String){
    return (s.len(), s);
}

fn sum(a : u32, b : u32) -> u32{
    return a + b;
}

fn is_even(a : i32) -> bool{
    return a % 2 == 0;
}


// rust dont allow the people to write bad code
