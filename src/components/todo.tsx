import { ITodo } from "@/interfaces/todo.interface";
import CompleteTask from "./completeTask";
import DeleteTask from "./deleteTask";
import EditTask from "./editTask";

export default function Todo({ todo }: { todo: ITodo }) {
  return (
    <div className="border border-white p-4 max-w-80 min-w-60 flex flex-col rounded-lg">
      <div className="flex justify-between gap-4 items-center">
        <input
          className="text-lg w-full"
          id={`todo-${todo.id}-name`}
          defaultValue={todo.name}
        />
        <EditTask taskId={todo.id} />
        <CompleteTask taskDone={todo.done} taskId={todo.id} />
        <DeleteTask taskId={todo.id} />
      </div>
      <textarea
        id={`todo-${todo.id}-description`}
        defaultValue={todo.description}
        className="resize-none field-sizing-content text-sm opacity-80 w-full"
      />
    </div>
  );
}
