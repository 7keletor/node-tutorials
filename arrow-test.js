//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }] ,
    getTasksToDo : function (tasks) 
    {
        // const incomplete=[];
        // var i;
        // for(i=0;i<this.tasks.length;i++)
        // {
        //     if(this.tasks[i].completed==false)
        //     incomplete.push(this.tasks[i].text)
        // }
        // console.log(incomplete);
        
        const incomplete = this.tasks.filter(function(task){
            return task.completed===false;
        })
        return incomplete;
    }
}
console.log(tasks.getTasksToDo());