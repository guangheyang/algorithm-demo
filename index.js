var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}
// 根据前序中序还原二叉树
function f1(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length !== zhong.length) return null;
    var root = new Node(qian[0]);
    // 找到根节点在中序遍历的位置
    var index = zhong.indexOf(root.value);
    var qianLeft = qian.slice(1, index + 1); // 前序遍历的左子树
    var qianRight = qian.slice(index + 1, qian.length); // 前序遍历的右子树
    var zhongLeft = zhong.slice(0, index); // 中序遍历的左子树
    var zhongRight = zhong.slice(index + 1, zhong.length); // 中序遍历的右子树
    root.left = f1(qianLeft, zhongLeft);
    root.right = f1(qianRight, zhongRight);
    return root;
}

// var root = f1(qian, zhong);

// console.log(root.left);
// console.log(root.right);

// 根据中序后序还原二叉树
function f2(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length !== hou.length) return null;
    var root = new Node(hou[hou.length - 1]);
    // 找到根节点在中序遍历的位置
    var index = zhong.indexOf(root.value);
    var zhongLeft = zhong.slice(0, index); // 中序遍历的左子树
    var zhongRight = zhong.slice(index + 1, zhong.length); // 中序遍历的右子树
    var houLeft = hou.slice(0, index); // 后序遍历的左子树
    var houRight = hou.slice(index, hou.length - 1); // 后序遍历的右子树
    root.left = f2(zhongLeft, houLeft);
    root.right = f2(zhongRight, houRight);
    return root;
}

var root1 = f2(zhong, hou);

console.log(root1.left);
console.log(root1.right);