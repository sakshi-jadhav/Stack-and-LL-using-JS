class Stack {
 
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
        // return this.peek();
    }

    printStack() {
        let stk  = "Stack is : ";
        for (var i = 0; i < this.items.length; i++)
            stk = stk + this.items[i] + " ";
        return stk;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return "size is : "+ this.items.length;
    }
 
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());