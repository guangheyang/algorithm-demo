// 有一万个数，写一个方法进行查找指定的数，返回存在还是不存在，要求：尽可能性能好
var arr = []
for (var i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

var num = 0;
// 普通方法
function search(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        num += 1
        if (arr[i] == target) return true;
    }
    return false;
}

console.log(search(arr, 1000));
console.log(num);

// 构建二叉搜索树
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value < num) {
        if (root.right == null) root.right = new Node(num);
        else addNode(root.right, num);
    } else {
        if (root.left == null) root.left = new Node(num);
        else addNode(root.left, num)
    }
}

function buildSearchTree(arr) {
    if (arr == null || arr.length == 0) return null;
    var root = new Node(arr[0]);
    for (var i = 0; i < arr.length; i++) {
        addNode(root, arr[i]);
    }

    return root;
}

var root = buildSearchTree(arr);

// 使用二叉搜索树
var index = 0
function searchByTree(root, target) {
    if (root == null) return false;
    index += 1
    if (root.value == target) return true;
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
}

var result = searchByTree(root, 1000);
console.log(result)
console.log(index)