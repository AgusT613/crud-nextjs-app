"use server";
import { revalidatePath } from "next/cache";

const API_URL = "http://localhost:8000/todo";
const HEADERS = { "Content-Type": "application/json" };

export async function createTodo(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ name, description }),
  });

  if (!res.ok) {
    console.log({
      message: `Cannot create todo. Error ${res.status}: ${res.statusText}`,
    });
  }

  console.log(await res.json());

  revalidatePath("/");
}

export async function setTaskComplete(formData: FormData) {
  const id = formData.get("id");
  const done = formData.get("done") === "true";

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify({ done }),
  });

  if (!res.ok) {
    console.log({
      message: `Cannot update todo. Error ${res.status}: ${res.statusText}`,
    });
  }

  console.log(await res.json());

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = formData.get("id");

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: HEADERS,
  });

  if (!res.ok) {
    console.log({
      message: `Cannot delete todo. Error ${res.status}: ${res.statusText}`,
    });
  }

  console.log(await res.json());

  revalidatePath("/");
}
