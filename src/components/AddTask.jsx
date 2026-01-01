import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-4  font-light border border-gray-300 rounded-lg w-96 mr-2.5 focus:outline-none focus:border-blue-900"
      />
      <button
        type="submit"
        className="border-2 border-gray-400 text-gray-500 h-18 rounded-xl p-2 hover:text-blue-900 hover:border-blue-900 cursor-pointer active:scale-105 transition-all duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
