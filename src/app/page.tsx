import CreateTodoBtn from "@/components/createTodoBtn";
import DialogCreateTodo from "@/components/dialogCreateTodo";
import Todo from "@/components/todo";
import { ITodo } from "@/interfaces/todo.interface";
import { API_TODOS } from "@/constants";

export default async function Home() {
  const data = await fetch(API_TODOS);
  const todos: ITodo[] = await data.json();
  const tasks: ITodo[] = todos.filter((todo) => !todo.done);
  const completed: ITodo[] = todos.filter((todo) => todo.done);

  return (
    <>
      <DialogCreateTodo />
      <header className="flex items-center p-4 gap-6">
        <h1 className="text-2xl">Todos</h1>
        <CreateTodoBtn />
      </header>
      <main className="px-4">
        <section>
          <h2>Tasks</h2>
          <article className="p-4 flex gap-4">
            {tasks.length == 0 && <p>No to-do&apos;s</p>}
            {tasks.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </article>
        </section>

        <section>
          <h2>Completed</h2>
          <article className="p-4 flex gap-4">
            {completed.length == 0 && <p>No completed to-do&apos;s</p>}
            {completed.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
