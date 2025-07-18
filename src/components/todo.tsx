import { ITodo } from "@/interfaces/todo.interface";
import CompleteTask from "./completeTask";
import DeleteTask from "./deleteTask";

export default function Todo({ todo }: { todo: ITodo }) {
  return (
    <div className="border border-white p-4 max-w-80 flex flex-col rounded-lg">
      <div className="flex justify-between gap-4 items-center">
        <span className="text-lg">{todo.name}</span>
        <CompleteTask taskDone={todo.done} taskId={todo.id} />
        <DeleteTask taskId={todo.id} />
      </div>
      <textarea
        defaultValue={todo.description}
        readOnly
        className="resize-none field-sizing-content text-sm opacity-80"
      />
    </div>
  );
}
