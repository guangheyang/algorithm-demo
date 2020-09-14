function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a1 = new Node('a');
var b1 = new Node('b');
var c1 = new Node('c');
var d1 = new Node('d');
var e1 = new Node('e');
var f1 = new Node('f');
var g1 = new Node('g');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

var a2 = new Node('a');
var b2 = new Node('b');
var c2 = new Node('c');
var d2 = new Node('d');
var e2 = new Node('e');
var f2 = new Node('f');
var g2 = new Node('g');

a2.left = c2;
a2.right = b2;
c2.left = f2;
// c2.right = g2;
b2.left = d2;
b2.right = e2;

var a3 = new Node('a');
var b3 = new Node('b');
var c3 = new Node('c');
var d3 = new Node('d');
var e3 = new Node('e');
var f3 = new Node('f');
var g3 = new Node('g');

a3.left = b3;
a3.right = c3;
c3.left = f3;
c3.right = g3;
b3.left = d3;
b3.right = e3;

function compareTree(root1, root2) {
    if (root1 == root2) return true; // 是同一个树
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;
    if (root1.value != root2.value) return false; // 相同位置的值不相等
    var leftBool = compareTree(root1.left, root2.left)
    var rightBool = compareTree(root1.right, root2.right)
    return leftBool && rightBool
    
}
console.log(compareTree(a1, a2));

// 左右互换
function compare(root1, root2) {
    if (root1 == root2) return true; // 是同一个树
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;
    if (root1.value != root2.value) return false; // 相同位置的值不相等
    return compare(root1.left, root2.left) && compare(root1.right, root2.right) || compare(root1.left, root2.right) && compare(root1.right, root2.left)
    
}
console.log(compare(a1, a3));