class Queue{
    constructor(){
        this.queue = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(value){
        this.queue[this.tail] = value
        this.tail++
    }

    dequeue(){
        const last = this.queue[this.head]
        delete this.queue[this.head]
        this.head++
        return last
    }

    peek(){
        return this.queue[this.head]
    }

    size(){
        return this.tail - this.head
    }

}

// head-tail

const testing = new Queue()
testing.enqueue(1)
testing.enqueue(2)
testing.enqueue(3)
testing.enqueue(4)
testing.enqueue(5)
testing.enqueue(6)
testing.dequeue()
console.log(testing)
console.log(testing.size())
console.log(testing.peek())
