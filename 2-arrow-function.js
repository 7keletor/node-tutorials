// const square = function(x)
// {
//     return x*x;
// }

// const square= (x) => {
//     return x*x;
// }

const square = (x) => x*x;

console.log(square(9));
// console.log("Nodemon output");

const event={
    name:'Birthday party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList: function(){
        console.log('Guest list for '+this.name) //functions can access the original object via this keyword
        for(var i=0;i<this.guestList.length;i++)
        console.log(this.guestList[i]+" is attending birthday party");
    }
}
event.printGuestList();