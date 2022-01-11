//---ES6

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

//---functional classes

// let Stack = function(){
//     let obj = {head: 0, tail: 0}
//     Object.assign(obj, Stack.methods)
//     return obj
// }

// Stack.methods = {
//     push: function(value){
//         this[this.tail] = value;
//         this.tail++    
//     },
//     pop: function(){
//         let last = this[this.tail - 1]
//         delete this[this.tail - 1]
//         this.head++
//         return last
//     }
// }

//---functional shared

// let Stack = function(){
//     let obj = {head: 0, tail: 0}
//     Object.assign(obj, stackMethods)
//     return obj
// }

//  var stackMethods = {
//     push(value){
//         this[this.tail] = value;
//         this.tail++    
//     },
//     pop(){
//         let last = this[this.tail - 1]
//         delete this[this.tail - 1]
//         this.head++
//         return last
//     }
// }

//---prototypal 

let Stack = function(){
    let obj = Object.create(stackMethods)
    obj.head = 0
    obj.tail = 0
    return obj
}

 var stackMethods = {
    push(value){
        this[this.tail] = value;
        this.tail++    
    },
    pop(){
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

//---decorators

// let stack = function(obj){
//     obj.head = 0
//     obj.tail = 0
//     obj.push = function(value){
//         obj[obj.tail] = value
//         obj.tail++
//     }
//     obj.pop = function(){
//         let last = obj[obj.tail - 1]
//         delete obj[obj.tail - 1]
//         obj.head++
//         return last
//     }
//     return obj
// }

// const testing = stack({})
// testing.push(1)
// testing.push(2)
// testing.push(3)
// testing.pop()
// console.log(testing)