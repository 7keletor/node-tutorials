const fs=require('fs');
const book={
    name:"Steve Jobs",
    author:"Walter Isaacson"
};

console.log(book);//to illustrate the difference between a json string and an object

const jbook=JSON.stringify(book);//json.strigify takes in an object and gives a json string back
// console.log(jbook);
// const jobj=JSON.parse(jbook);//json.parse takes in a JSON string and gives back an object
// console.log(jobj);
// console.log(jobj.author);//same as book.author (both book and jobj are objects)

//  fs.writeFileSync('1-json.json',jbook); //commented since it needs to be run only once during the creation
// const dataBuffer=fs.readFileSync('1-json.json');//dataBuffer will contain output in encoded binary format 
// const dataJSON=dataBuffer.toString();//this will convert the encoded data to a readable string 
// const data=JSON.parse(dataJSON);
// console.log(data.name);

//for changing the contents of the original json file
const test=fs.readFileSync('1-json.json');
const testdata=test.toString();
const data2=JSON.parse(testdata);
data2.name="War and Peace";
data2.author="Leo Tolstoy";
const databook=JSON.stringify(data2);
fs.writeFileSync('1-json.json',databook);
