// class Stack{
//     constructor(){
//         this.stack = []    
//     }

//     push(value){
//         this.stack[this.stack.length] = value
//     }

//     pop(){
//         let last = this.stack[this.stack.length - 1]
//         this.stack.length = this.stack.length - 1
//         return last
//     }

//     size(){
//         return this.stack.length
//     }

// }

// class Stack{
//     constructor(){
//         this.stack = {}
//         this.head = 0
//         this.tail = 0
//     }

//     push(value){
//         this.stack[this.tail] = value
//         this.tail++
//     }

//     pop(){
//         let last = this.stack[this.tail - 1]
//         delete this.stack[this.tail - 1]
//         this.head++
//         return last
//     }

//     size(){
//         return this.tail - this.head
//     }
// }

let Stack = function(){
    let obj = {head: 0, tail: 0}
    Object.assign(obj, Stack.methods)
    return obj
}

Stack.methods = {
    push: function(value){
        this[this.tail] = value;
        this.tail++    
    },
    pop: function(){
        let last = this[this.tail - 1]
        delete this[this.tail - 1]
        this.head++
        return last
    }
}

const firstTry = Stack()
firstTry.push(1)
firstTry.push(2)
firstTry.push(3)
firstTry.push(4)
console.log(firstTry.pop())
console.log(firstTry)
// console.log(firstTry.size())