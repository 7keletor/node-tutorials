// var a = [34, 35, 45, 48, 49];
// var b = [48, 55];
// console.log(a[5])
// a = [...new Set([...a, ...b])];
// console.log(a[5])
// console.log(a);

var r=[
    {d:1},
    {e:2},
    {f:3}
]
var s=[
    {d:1},
    {d:4},
    {e:5}
]

t = [...new Set([...r, ...s])];
console.log(t)