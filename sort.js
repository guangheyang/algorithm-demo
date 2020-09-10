// 数组

// 排序不是比较大小，本质是比较和交换
var arr = [4,1,6,9,3,2,8,7];

function sort1(arr) {
    var newArr = new Array(arr.length);
    for (var i = 0; i < newArr.length; i++) {
        newArr[i] = getMin(arr)
    }
    return newArr
}

function getMin(arr) {
    if (arr == null || arr.length == 0) return;
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != null && arr[i] < arr[index] || arr[i] != null && index == -1) {
            index = i;
        }
    }
    var result = arr[index];
    arr[index] = null;
    return result;
}
// console.log(sort1(arr))

// 冒泡排序
function compare(a, b) { // 比较之后需要得出是否需要交换
    return a > b
}

function exchange(arr, a, b) { // 将数组中ab位置里的值进行交换
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort2(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            console.log(arr[j])
            if(compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}
// sort2(arr);
// console.log(arr, '冒泡');

// 选择排序
function sort3(arr) { // 内层循环，每次选出一个最大的放在后面
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            console.log(maxIndex)
            if(compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i);
    }
}
// sort3(arr);
// console.log(arr, '选择');

// 简单快速排序
function sort4(arr) {
    if (arr == null || arr.length === 0) return [];
    var leader = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < leader) left.push(arr[i])
        else right.push(arr[i])
    }
    left = sort4(left);
    right = sort4(right);
    left.push(leader);
    return left.concat(right)
}

// console.log(sort4(arr));

// 标准快速排序
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quick(arr, begin, end) {
    if (begin >= end - 1) return;
    var left = begin;
    var right = end;
    do {
        do left++; while(left < right && arr[left] < arr[begin]);
        do right--; while(right > left && arr[right] > arr[begin]);
        if (left < right) swap(arr, left, right)
    } while (left < right)
    var swapPoint = left == right ? right - 1 : right;
    // console.log(swapPoint, 'point')
    swap(arr, begin, swapPoint);
    quick(arr, begin, swapPoint);
    quick(arr, swapPoint + 1, end);
}
function sort5(arr) {
    quick(arr, 0, arr.length)
}
// sort5(arr)
// console.log(arr)