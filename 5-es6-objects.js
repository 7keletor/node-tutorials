//object property shorthand

const age=23
const name='Dharesh'

const user = {
    name,age
}

console.log(user.name)
console.log(user.age)

//object destructuring
const product={
    label: 'name',
    price : 3,
    stock : 201
}

// const {price,stock,rating,label:productLabel}=product //reating will be undefined since the object has no property with
// //this name. productLabel is used when we want to have a different name for the object variable
// console.log(price)//now we don't need to write product.price
// console.log(stock)
// console.log(rating)
// console.log(productLabel)

//destructuring in functions
const transc = (type,{label,stock}) => {
    console.log(type,label,stock)
}
transc('order',product)