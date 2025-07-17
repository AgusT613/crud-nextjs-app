import CreateTodoForm from "./createTodoForm";

export default function DialogCreateTodo() {
  return (
    <dialog
      id="create-todo-element"
      className="bg-slate-400/35 w-screen h-screen text-white"
    >
      <div className="flex items-center justify-center h-full w-full">
        <div className="min-h-30 flex items-center justify-between gap-2 flex-col p-6 bg-slate-600 rounded-2xl">
          <CreateTodoForm />

          <form method="dialog" className="w-full">
            <button
              type="submit"
              className="cursor-pointer border-2 border-slate-700 hover:bg-slate-700 text-white rounded-2xl w-full"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
