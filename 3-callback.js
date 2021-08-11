//asynchronous use of callback
setTimeout(() => {
    console.log("2 seconds are up");
}, 2000)

//synchronous use of callback
const names = ['Dharesh', 'Vatsal', 'Shashwat']
const nametokeep = names.filter((n) => { //we are passing a function to the filter function
    return n.length >= 7
})
console.log(nametokeep)

//use of callbacks with complex asynchronous functions
const geocode = (address,callback) => { //callback is not a keyword, it is just a function 
    //which we will be calling once we have the data
    setTimeout( ()=>{
        const data ={
            latitude :0,
            longitude: 0
        }
        callback(data)
//we can't return data in setTimeout function since then it wont be visible to the outer geocode function
    },2000)
}
geocode('Philadelphia',(data)=>{ //we are passing the callback function as an argument
    console.log(data)
})

//adding two numbers using callbacks and print after 3 seconds
const add =(a,b,callback) => {
    setTimeout(() =>{
        callback(a+b)
    },3000)
}
add(1,4, (sum) =>{
    console.log(sum)
})
