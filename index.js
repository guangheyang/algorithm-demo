// 有一万个数，写一个方法进行查找指定的数，返回存在还是不存在，要求：尽可能性能好
// 判断平衡二叉树
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var i = new Node('i');

a.left = b;
a.right = c;
b.left = d;
// b.right = e;
c.left = f;
c.right = g;
d.right = h;
// e.right = i;

// 获取二叉树深度
function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 是否为平衡二叉树
function isBalance(root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

console.log(isBalance(a));