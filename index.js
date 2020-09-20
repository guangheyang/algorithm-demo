function Node(value) {
    this.value = value;
    this.childs = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

// 树的深度优先搜索
function deepSearch(root) {
    if (root == null) return;
    console.log(root.value);
    for (var i = 0; i < root.childs.length; i++) {
        deepSearch(root.childs[i]);
    }
}
deepSearch(a);

// 树的广度优先搜索
function range(root, target) {
    if (root == null || root.length == 0) return false;
    var childs = [];
    for (var i = 0; i < root.length; i++) {
        if (root[i].value == target) return true;
        else childs = childs.concat(root[i].childs)
    }
    return range(childs, target);
}
console.log(range([a], 'c'))