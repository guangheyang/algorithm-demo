function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

// 图的深度优先搜索
function deepSearch(node, target, path) {
    if (node == null) return false;
    if (path.indexOf(node) > -1) return false;
    if (node.value == target) return true;
    path.push(node);
    var result = false;
    for (var i = 0; i < node.neighbor.length; i++) {
        result |= deepSearch(node.neighbor[i], target, path);
    }
    return result ? true : false;
}
console.log(deepSearch(a, 'c', []));

// 图的广度优先搜索
function range(node, target, path) {
    if (node == null || node.length == 0) return false;
    if (path.indexOf(node) > -1) return false;
    var neighbor = [];
    for (var i = 0; i < node.length; i++) {
        if (path.indexOf(node[i]) > -1) continue;
        path.push(node[i]);
        if (node[i].value == target) return true;
        else neighbor = neighbor.concat(node[i].neighbor)
    }
    return range(neighbor, target, path);
}
console.log(range([a], 'n', []))