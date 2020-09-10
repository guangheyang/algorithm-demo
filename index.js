var arr = [];
// 栈结构
function Stack() {
    this.arr = []
    this.push = function(value) {
        this.arr.push(value)
    }
    this.pop = function() {
        return this.arr.pop()
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr)
stack.pop()
console.log(stack.arr)

// 队列结构
function Queue() {
    this.arr = [];
    this.push = function(value) {
        this.arr.push(value);
    }
    this.shift = function() {
        return this.arr.shift()
    }
}

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr)
queue.shift()
console.log(queue.arr)

// 双向链表
function Node(value) {
    this.value = value;
    this.next = null;
    this.pre = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.pre = node1;
node2.next = node3;
node3.pre = node2;
node3.next = node4;
node4.pre = node3;
node4.next = node5;
node4.pre = node4;
