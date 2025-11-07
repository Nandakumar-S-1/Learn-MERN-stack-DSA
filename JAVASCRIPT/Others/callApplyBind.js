const team = {
    name: "Developer",
    members: ["Alice", "Bob", "Charlie"],
}
function AssignTask(task,day){
    console.log(`${this.name} ${this.members[1]} has  ${task} assigned in ${day}`)    
}

AssignTask.call(team,"review","monday")
AssignTask.apply(team,["Interview","friday"])
let newTask=AssignTask.bind(team,"bugs fix")
newTask("wednesday")