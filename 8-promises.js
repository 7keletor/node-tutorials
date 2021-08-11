//A promise is an object that gives us back either the result of an asynchronous operation
//or a failure of asynchronous operation
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Got the user')
        resolve ({user:'ed'})
    },2000)
})
//resolve is for successfule execution
//reject is for the case when we encounter a problem

promise
.then(user=>{
    console.log(user)
})
.catch(err=>console.log(err.message));
