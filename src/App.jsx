import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";

const App = () => {
  return (
    <div className="flex mt-20 items-center min-h-screen flex-col gap-4 font-bold text-3xl">
      <div>
        <h1 className="text-8xl text-blue-900 animate-bounce">Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
};

export default App;