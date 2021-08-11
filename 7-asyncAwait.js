console.log('Start');

loginUser = (email,password) =>{
    setTimeout( ()=>{
        console.log('Now we have the data')
        return {userEmail :email}
    },3000)
}

const user = loginUser ('dvatsa77@gmail.com',12345); 
console.log(user);//this will give undefined since this line will run 
//before the setTimeout function because of how asynchronous js runs
//this line will run at the same time the code is called while the 
//login function is supposed to run after 3 seconds

console.log('Finish')

