// 链表
var b = {
    value: 2,
    next: null
}

var a = {
    value: 1,
    next: b
}

console.log(a.next === b);

// 创建链表
function Node(value) {
    this.value = value;
    this.next = null
}

var c = new Node(1);
var d = new Node(2);
var e = new Node(3);

c.next = d;
d.next = e;
e.next = null;

console.log(c.next.value)

// 遍历链表
function bianLink(root) {
    var temp = root;
    while(true) {
        if (temp != null) {
            console.log(temp.value)
        } else {
            break;
        }
        temp = temp.next;
    }
}

bianLink(c);

// 链表的递归遍历
function digui_bianLink(root) {
    if (root == null) return;
    console.log(root.value, '递归')
    digui_bianLink(root.next);
}

digui_bianLink(c)

// 链表的倒置
function inverse(root) {
    if (root.next.next == null) { // 当前节点是倒数第二个节点
        root.next.next = root; //让最后一个节点指向自己（倒数第二个节点）
        return root.next;
    } else {
        var result = inverse(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

var newRoot = inverse(c);
digui_bianLink(newRoot);