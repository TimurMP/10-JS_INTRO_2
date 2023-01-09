// let a = false
// let b = "hello"
// let c = a || b
//
// console.log(c)
//
//
// a = "hi"
// b = "hello"
// c = a && b
//
// console.log(c)

// const arr = [1,2,3, "hello"]
// console.log(arr[3])
// console.log(arr.length)
// console.log(typeof arr[1])
// console.log(arr)
//
// printArray(arr)
//
// function printArray(arr){
//     console.log("===============")
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
//     console.log("===============")

// }

console.log(pow(5))
console.log(factorial(4))


const  greeting =  (name) => {
    console.log(`Hello ${name}`)
}


const pow4 =  x => {
    return pow(x) * pow(x);
}


console.log(typeof greeting)
console.log(greeting)
console.log(pow)


greeting("Tim")

function pow(x) {
    return x * x;
}

function  factorial (n){
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *=i;
    }
    return res;
}


console.log("==============")

let res = uniFunction(6, pow, factorial)
console.log(res)



function uniFunction(x, fn1 , fn2){
    if (x < 0){
        return fn1(x);
    }
    else {
        return fn2(x);
    }
}












