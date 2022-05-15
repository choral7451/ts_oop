/**
 * Let's make a calculator 🧮
 */
 console.log(calculate('add', 1, 3)); // 4
 console.log(calculate('substract', 3, 1)); // 2
 console.log(calculate('multiply', 4, 2)); // 8
 console.log(calculate('divide', 4, 2)); // 2
 console.log(calculate('remainder', 5, 2)); // 1
 
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate (str: Command, x: number, y: number): number {
    if(str === "add") return x + y;
    else if(str === "substract") return x - y;
    else if(str === "multiply") return x * y;
    else if(str === "divide") return x / y;
    else if(str === "remainder") return x % y;
    else throw Error('unkown command');
}




