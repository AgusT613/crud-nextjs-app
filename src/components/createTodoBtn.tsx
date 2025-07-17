"use client";

export default function CreateTodoBtn() {
  const handleClickDialog = () => {
    const dialogElement = document.getElementById(
      "create-todo-element"
    ) as HTMLDialogElement;

    dialogElement.showModal();
  };

  return (
    <>
      <button
        onClick={handleClickDialog}
        className="cursor-pointer hover:bg-green-700 p-1 rounded-lg"
      >
        Create
      </button>
    </>
  );
}
