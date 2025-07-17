import { deleteTodo } from "@/app/actions";

export default function DeleteTask({ taskId }: { taskId: number }) {
  return (
    <form action={deleteTodo}>
      <input type="text" readOnly hidden name="id" defaultValue={taskId} />
      <button type="submit" className="cursor-pointer">
        Eliminar
      </button>
    </form>
  );
}
