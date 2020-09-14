function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right
}

console.log(deepSearch(a, 's'))


function rangeSearch(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    var childList = []
    for (var i = 0; i < rootList.length; i++) {
        console.log(rootList[i].value)
        if (rootList[i] != null && rootList[i].value == target) {
            return true
        } else {
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return rangeSearch(childList, target);
}

console.log(rangeSearch([a], 'f'))