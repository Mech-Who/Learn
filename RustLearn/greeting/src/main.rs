enum CalcType {
    Add,
    Sub,
    Mul,
    Div,
    Mod,
}

fn add(n1: i32, n2: i32) -> i32 {
    n1 + n2
}

fn sub(n1: i32, n2: i32) -> i32 {
    n1 - n2
}

fn mul(n1: i32, n2: i32) -> i32 {
    n1 * n2
}

fn div(n1: i32, n2: i32) -> i32 {
    n1 / n2
}

fn mod_(n1: i32, n2: i32) -> i32 {
    n1 % n2
}

fn calc(a: i32, b: i32, calc_type: CalcType) -> i32 {
    match calc_type {
        CalcType::Add => add(a, b),
        CalcType::Sub => sub(a, b),
        CalcType::Mul => mul(a, b),
        CalcType::Div => div(a, b),
        CalcType::Mod => mod_(a, b),
    }
}

fn main() {
    let a = 23;
    let b = 5;
    let res = calc(a, b, CalcType::Add);
    println!("{} + {} = {}", a, b, res);
    let res = calc(a, b, CalcType::Sub);
    println!("{} - {} = {}", a, b, res);
    let res = calc(a, b, CalcType::Mul);
    println!("{} * {} = {}", a, b, res);
    let res = calc(a, b, CalcType::Div);
    println!("{} / {} = {}", a, b, res);
    let res = calc(a, b, CalcType::Mod);
    println!("{} % {} = {}", a, b, res);
    println!("Hello, world!");
}
