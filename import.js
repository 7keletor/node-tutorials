const exp=require('./exportss');

//when we are importing many things using an object we have to use the . operator to access the 
//object's individual components
console.log(chalk.green.inverse(exp.n('Dharesh')));
console.log(chalk.red.inverse(exp.a(7,100)));

//see the difference in syntax in importing a single function and in importing an object.
//when a single function is imported we can treat the importing variable just the same 
//as the function which is being imported
// console.log(chalk.yellow.inverse(exp()));