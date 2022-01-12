//---ES6

// class Queue{
//     constructor(){
//         this.queue = {}
//         this.head = 0
//         this.tail = 0
//     }

//     enqueue(value){
//         this.queue[this.tail] = value
//         this.tail++
//     }

//     dequeue(){
//         const last = this.queue[this.head]
//         delete this.queue[this.head]
//         this.head++
//         return last
//     }

//     peek(){
//         return this.queue[this.head]
//     }

//     size(){
//         return this.tail - this.head
//     }

// }

//---functional

// let Queue = function(){
//     let obj = {head: 0, tail: 0}
//     Object.assign(obj, Queue.methods)
//     return obj
// }

// Queue.methods = {
//     enqueue: function(value){
//         this[this.tail] = value
//         this.tail++
//     },
//     dequeue: function(){
//         const last = this[this.head]
//         delete this[this.head]
//         this.head++
//         return last
//     }
// }

//---functional shared

// let Queue = function(){
//     let obj = {head: 0, tail: 0}
//     Object.assign(obj, queueMethods)
//     return obj
// }

// var queueMethods = {
//     enqueue: function(value){
//         this[this.tail] = value
//         this.tail++
//     },
//     dequeue: function(){
//         const last = this[this.head]
//         delete this[this.head]
//         this.head++
//         return last
//     }
// }

//---prototypal

// let Queue = function(){
//     let obj = Object.create(queueMethods)
//     obj.head = 0
//     obj.tail = 0
//     return obj
// }

// var queueMethods = {
//     enqueue(value){
//         this[this.tail] = value
//         this.tail++
//     },
//     dequeue(){
//         const last = this[this.head]
//         delete this[this.head]
//         this.head++
//         return last
//     }
// }

//OR this

// let Queue = function(){
//     let obj = Object.create(Queue.prototype)
//     obj.head = 0
//     obj.tail = 0
//     return obj
// }

// Queue.prototype.enqueue = function(value){
//         this[this.tail] = value
//         this.tail++
// }

// Queue.prototype.dequeue = function(){
//         const last = this[this.head]
//         delete this[this.head]
//         this.head++
//         return last
// }

// const testing = Queue()
// testing.enqueue(1)
// testing.enqueue(2)
// testing.enqueue(3)
// testing.enqueue(4)
// testing.enqueue(5)
// testing.enqueue(6)
// testing.dequeue()
// console.log(testing)
// console.log(testing.size())
// console.log(testing.peek())

//---psuedoclassical

let Queue = function(){
    this.head = 0
    this.tail = 0
}

Queue.prototype.enqueue = function(value){
        this[this.tail] = value
        this.tail++
}

Queue.prototype.dequeue = function(){
        const last = this[this.head]
        delete this[this.head]
        this.head++
        return last
}

const testing = new Queue()
testing.enqueue(1)
testing.enqueue(2)
testing.enqueue(3)
testing.enqueue(4)
testing.enqueue(5)
testing.enqueue(6)
testing.dequeue()
console.log(testing)