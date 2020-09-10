# 数据结构和算法关系？

可以容纳数据的结构成为数据结构。

算法是用来对数据结构进行处理的方法。

数据结构是静态的。

算法是动态的。

# 一维数据结构（线性数据结构）

线性的数据结构强调存储与顺序。

## 数组

### 数组定长

底层的数组长度是固定的，`js`中的数组感觉上是不固定的，原因是`js`引擎在超出长度后，在新的连续的存储空间进行扩容操作，但扩容是消耗性能的。

### 数组特性与优缺点

1. 存储在物理空间上是连续的。
2. 底层的数组长度是不可变的。
3. 数组的变量，指向了数组第一个元素的位置。arr[1],方括号表示存储地址的偏移。通过偏移查询数据性能最好。

优点：查询性能好。

缺点：

1. 因为空间必须是连续的，所以如果数组比较大，空间碎片较多，容易存不下。
2. 因为数组的长度是固定的，所以数组的内容难以被添加和删除。

### 空间碎片

声明变量时，系统连续生成存储地址，当一些变量使用后被收回，这些空间成为空间碎片。系统整理空间碎片非常缓慢，消耗性能。

## 链表

传递一个链表，必须传递链表的根节点，每个节点都认为自己是根节点。

### 链表特性与优缺点

1. 空间上不是连续的。
2. 每存放一个值，都要多开销一个引用空间。

优点：

1. 只要存储足够大，不用担心空间碎片的问题。
2. 链表的添加和删除非常容易。

缺点：

1. 查询速度慢（值查询某一位置）
2. 链表每一个节点都需创建一个指向next的引用，浪费一些空间。当节点内数据越多，这部分开销对内存影响越少。

## 遍历

将一个集合中的每一个元素进行获取并查看。