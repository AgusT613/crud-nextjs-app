import CreateTodoBtn from "@/components/createTodoBtn";
import DialogCreateTodo from "@/components/dialogCreateTodo";
import Todo from "@/components/todo";
import { ITodo } from "@/interfaces/todo.interface";

export default async function Home() {
  const data = await fetch("http://localhost:8000/todo");
  const todos: ITodo[] = await data.json();
  const tasks: ITodo[] = todos.filter((todo) => !todo.done);
  const completed: ITodo[] = todos.filter((todo) => todo.done);

  return (
    <>
      <DialogCreateTodo />
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl">Todo List</h1>
        <CreateTodoBtn />
      </header>
      <main className="px-4">
        <section>
          <h2>Tasks</h2>
          <article className="p-4 flex gap-4">
            {tasks.length == 0 && <p>No todos</p>}
            {tasks.map((todo, index) => (
              <Todo todo={todo} index={index} key={todo.id} />
            ))}
          </article>
        </section>

        <section>
          <h2>Completed</h2>
          <article className="p-4 flex gap-4">
            {completed.length == 0 && <p>No completed todos</p>}
            {completed.map((todo, index) => (
              <Todo todo={todo} index={index} key={todo.id} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
