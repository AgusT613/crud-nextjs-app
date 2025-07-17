import { createTodo } from "@/app/actions";

export default function CreateTodoForm() {
  return (
    <form action={createTodo} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          className="bg-slate-700 p-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="field-sizing-content resize-none w-72 p-2 bg-slate-700"
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className="border-2 border-slate-700 rounded-2xl cursor-pointer hover:bg-slate-700"
      >
        Create
      </button>
    </form>
  );
}
