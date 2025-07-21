"use client";

import { Plus } from "@deemlol/next-icons";
import ActionBtn from "./actionBtn";

export default function CreateTodoBtn() {
  const handleClickDialog = () => {
    const dialogElement = document.getElementById(
      "create-todo-element"
    ) as HTMLDialogElement;

    dialogElement.showModal();
  };

  return (
    <ActionBtn onClick={handleClickDialog}>
      <Plus className="size-full" />
    </ActionBtn>
  );
}
