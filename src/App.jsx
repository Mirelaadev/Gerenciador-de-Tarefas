import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: "Estudar programação",
    description: "Estudar para se tornar desenvolvedor full stack",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar Ingles",
    description: "Estudar para se tornar fluente",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar",
    description: "Estudar para Aprender",
    isCompleted: false
  },
]);

function onTaskClick(taskId) {
  const newTask = tasks.map(task => {
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }
      return task
  });
  setTasks(newTask);

}

function onDeleteTasksClick(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
}

function onAddTaskSubmit (title, description) {
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    isCompleted: false
  };
  setTasks([...tasks, newTask])
 

}

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
          </h1>
          <AddTasks onAddTaskSubmit={onAddTaskSubmit}/> 
          <Tasks tasks={tasks}
           onTaskClick={onTaskClick}
           onDeleteTasksClick={onDeleteTasksClick}/>

      </div>
    </div>
  );
}
export default App;