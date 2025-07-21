"use client";

import { editTask } from "@/app/actions";
import { Save } from "@deemlol/next-icons";
import ActionBtn from "./actionBtn";

export default function EditTask({ taskId }: { taskId: number }) {
  return (
    <ActionBtn
      onClick={async () => {
        const inputElement = document.getElementById(
          `todo-${taskId}-name`
        ) as HTMLInputElement;
        const textareaElement = document.getElementById(
          `todo-${taskId}-description`
        ) as HTMLTextAreaElement;
        const name = inputElement.value as string;
        const description = textareaElement.value as string;

        await editTask(taskId, name, description);
      }}
    >
      <Save className="size-4" />
    </ActionBtn>
  );
}
