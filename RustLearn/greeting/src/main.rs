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
struct Operation{
    op1: i32,
    op2: i32,
    op_type: CalcType,
}

fn calc(op: Operation) -> i32 {
    match op.op_type {
        CalcType::Add => add(op.op1, op.op2),
        CalcType::Sub => sub(op.op1, op.op2),
        CalcType::Mul => mul(op.op1, op.op2),
        CalcType::Div => div(op.op1, op.op2),
        CalcType::Mod => mod_(op.op1, op.op2),
    }
}

fn main() {
    let a = 23;
    let b = 5;
    // add
    let op = Operation{
        op1: a,
        op2: b,
        op_type: CalcType::Add,
    };
    let res = calc(op);
    println!("{} + {} = {}", a, b, res);
    // Sub
    let op = Operation{
        op1: a,
        op2: b,
        op_type: CalcType::Sub,
    };
    let res = calc(op);
    println!("{} - {} = {}", a, b, res);
    // Mul
    let op = Operation{
        op1: a,
        op2: b,
        op_type: CalcType::Mul,
    };
    let res = calc(op);
    println!("{} * {} = {}", a, b, res);
    // Div
    let op = Operation{
        op1: a,
        op2: b,
        op_type: CalcType::Div,
    };
    let res = calc(op);
    println!("{} / {} = {}", a, b, res);
    // Mod
    let op = Operation{
        op1: a,
        op2: b,
        op_type: CalcType::Mod,
    };
    let res = calc(op);
    println!("{} % {} = {}", a, b, res);
    // over
    println!("Hello, world!");
}
