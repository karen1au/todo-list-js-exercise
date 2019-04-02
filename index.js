function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function(){
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markComplete:function(){
      task.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the shit out of the litter box"); // task 0
const task2 = newTask("Do Laundry","omg"); // task 1
tasks = [task1,task2];

task1.logState()
task1.markComplete()
task1.logState()

console.log(tasks)