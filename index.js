// 动态规划之斐波那契数列
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 44,....
// 给出第n位，求第n位的值？

function fibo(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    var a = 0;
    var b = 1;
    var c = 0;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fibo(5));

function fibo2(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibo2(n - 1) + fibo2(n - 2);
}
console.log(fibo2(5));

// 动态规划之青蛙跳台阶问题
// 一只青蛙，一次只能跳一级台阶或两级台阶
// 这只青蛙跳上n级台阶有多少种跳法

// 思路：如果这只青蛙，跳上第n级台阶，那么最后一次跳跃之前，它一定在n-1级台阶或n-2级台阶
// n-1与n-2的跳法

function jump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return jump(n - 1) + jump(n - 2);
}

console.log(jump(5));

// 变态青蛙跳台阶问题
// 一只青蛙，一次只能跳一级台阶、两级台阶或n级台阶
// 这只青蛙跳上n级台阶有多少种跳法

function btJump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    var result = 0;
    for (var i = 1; i < n; i++) {
        result += btJump(n - 1);
    }
    return result + 1;
}

console.log(btJump(5));