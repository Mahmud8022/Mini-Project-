let todos = [];

// add task
function addTask(task) {
    todos.push(task);
    console.log("Added:", task);
}

// show all task
function showTask() {
    for (let i = 0; i < todos.length; i++) {
        console.log(i + ": " + todos[i]);
    }
}

// delete task
function deleteTask(index) {
    todos.splice(index, 1);
}

// use 
addTask("Learn js");
addTask("Practic Array");
addTask();

deleteTask(0);
showTask();