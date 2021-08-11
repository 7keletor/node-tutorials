const a={
    b:2,
    c:[ 
        {d: 12},
        {e: 13}
    ]
}
console.log(a.c[1])

var r=[
    {id:1},
    {id:2},
    {id:3}
]

console.log(r[0].id)
r.splice(0,1)

console.log(r)

// arr=[1,2,3,44]
// console.log(typeof(arr))
