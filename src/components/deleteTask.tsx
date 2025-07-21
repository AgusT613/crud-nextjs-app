import { deleteTodo } from "@/app/actions";
import { Trash } from "@deemlol/next-icons";
import ActionBtn from "./actionBtn";

export default function DeleteTask({ taskId }: { taskId: number }) {
  return (
    <form action={deleteTodo} className="flex m-auto">
      <input type="text" readOnly hidden name="id" defaultValue={taskId} />
      <ActionBtn type="submit">
        <Trash className="size-4" />
      </ActionBtn>
    </form>
  );
}
