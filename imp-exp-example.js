const obj={
    a:function (a,b) // its our choice if we want to write the function's name or not over here
    {
        return a+b;
    }
}
console.log(obj.a(4,6));

const obj1={
    name:'Dharesh Vatsa',
    gender:'Male'
};
console.log(obj1.gender);

const u=require('./utils');
console.log(u.lastname);