import { CheckCircle, RotateCcw, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../features/task/taskSlice";
import { deleteTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
  return (
    <li className="flex items-center justify-between mb-3 mt-2 p-4 rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition">
        
      <div className="flex items-center gap-3">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            task.completed ? "bg-green-500" : "bg-blue-500"
          }`}
        ></span>

        <span
          className={`font-medium ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.text}
        </span>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-3">
        
        {/* Toggle Done / Undo */}
        <button
        onClick={() => dispatch(toggleTask(task.id))}
          className={`p-2 rounded-full transition ${
            task.completed
              ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
              : "bg-green-100 text-green-600 hover:bg-green-200"
          }`}
          title={task.completed ? "Undo task" : "Mark as done"}
        >
          {task.completed ? (
            <RotateCcw size={18} />
          ) : (
            <CheckCircle size={18} />
          )}
        </button>

        <button
        onClick={() => dispatch(deleteTask(task.id))}
          className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
          title="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
