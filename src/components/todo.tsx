import { ITodo } from "@/interfaces/todo.interface";
import CompleteTask from "./completeTask";
import DeleteTask from "./deleteTask";

export default function Todo({ todo, index }: { todo: ITodo; index: number }) {
  return (
    <div className="border-2 border-white p-2 max-w-80 flex flex-col">
      <div className="flex justify-between gap-4">
        <p>
          Todo {index} - {todo.name}
        </p>
        <CompleteTask taskDone={todo.done} taskId={todo.id} />
        <DeleteTask taskId={todo.id} />
      </div>
      <textarea
        defaultValue={todo.description}
        readOnly
        className="resize-none field-sizing-content"
      />
    </div>
  );
}
