// 有一万个数，写一个方法进行查找指定的数，返回存在还是不存在，要求：尽可能性能好
// 判断平衡二叉树
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node8 = new Node('8');
var node7 = new Node('7');
var node6 = new Node('6');
var node5 = new Node('5');
var node2 = new Node('2');

node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node2;

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

// 左旋
function leftRotate(root) {
    // 找到新根
    var newRoot = root.right;
    // 找到变化分支
    var changeTree = root.right.left;
    // 当前旋转节点的右孩子为变化分支
    root.right = changeTree;
    // 新根的左孩子为旋转节点
    newRoot.left = root;
    // 返回新的根节点
    return newRoot;
}
// 右旋
function rightRotate(root) {
    // 找到新根
    var newRoot = root.left;
    // 找到变化分支
    var changeTree = root.left.right;
    // 当前旋转节点的左孩子为变化分支
    root.left = changeTree;
    // 新根的右孩子为旋转节点
    newRoot.right = root;
    // 返回新的根节点
    return newRoot;
}

function change(root) {
    if (isBalance(root)) return root;
    if (root.left != null) root.left = change(root.left);
    if (root.right != null) root.right = change(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {
        var changeTreeDeep = getDeep(root.left.right);
        var noChangeTreeDeep = getDeep(root.left.left);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left);
        }
        var newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right);
        newRoot = change(newRoot);
        return newRoot;
    } else {
        var changeTreeDeep = getDeep(root.right.left);
        var noChangeTreeDeep = getDeep(root.right.right);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right);
        }
        var newRoot = leftRotate(root);
        newRoot.left = change(newRoot.left);
        newRoot = change(newRoot);
        return newRoot;
    }
    return root;
}

function addNode(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value < num) {
        if (root.right == null) root.right = new Node(num);
        else addNode(root.right, num);
    } else {
        if (root.left == null) root.left = new Node(num);
        else addNode(root.left, num);
    }
}

function buildSearchTree(arr) {
    if (arr == null || arr.length == 0) return null;
    var root = new Node(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root;
}

var arr = [];
for (var i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random()*10000))
}

var num2 = 0;
function searchByTree(root, target) {
    if (root == null) return false;
    num2 += 1;
    if (root.value == target) return true;
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
}

var root = buildSearchTree(arr);

console.log(searchByTree(root, 1000));
console.log(num2);
console.log(getDeep(root));

var newRoot = change(root);
num2 = 0;
console.log(searchByTree(newRoot, 1000));
console.log(num2);
console.log(getDeep(newRoot));
// console.log(isBalance(node8));

// var newRoot = change(node8);

// console.log(isBalance(newRoot));