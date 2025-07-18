"use client";

import { Plus } from "@deemlol/next-icons";

export default function CreateTodoBtn() {
  const handleClickDialog = () => {
    const dialogElement = document.getElementById(
      "create-todo-element"
    ) as HTMLDialogElement;

    dialogElement.showModal();
  };

  return (
    <button
      onClick={handleClickDialog}
      className="cursor-pointer hover:bg-green-700 p-2 rounded-full"
    >
      <Plus className="size-full" />
    </button>
  );
}
