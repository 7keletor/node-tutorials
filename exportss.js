// chalk=require('chalk');
// console.log(chalk.green.inverse(("Hello world")));

chalk=require('chalk')

names= (n) =>{
    return "My name is "+n;
}

add = (a,b) => {
    a=a+1;
    b=b+1;
    return a+b;
}

greet = () => {
    return "Good morning everyone";
}

//below syntax is for exporting many things using objects
// module.exports={ //objects are used when we want to export many variables and functions at once
//     n :names,
//     a: add
// }

//below written syntax is for exporting single entities
// module.exports= greet;