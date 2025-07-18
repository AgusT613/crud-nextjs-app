"use server";
import { API_TODOS, HEADERS } from "@/constants";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");

  const res = await fetch(API_TODOS, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ name, description }),
  });

  if (!res.ok) {
    console.log({
      message: `Cannot create todo. Error ${res.status}: ${res.statusText}`,
    });
  }

  revalidatePath("/");
}

export async function setTaskComplete(formData: FormData) {
  const id = formData.get("id");
  const done = formData.get("done") === "true";

  const res = await fetch(`${API_TODOS}/${id}`, {
    method: "PATCH",
    headers: HEADERS,
    body: JSON.stringify({ done }),
  });

  if (!res.ok) {
    console.log({
      message: `Cannot update todo. Error ${res.status}: ${res.statusText}`,
    });
  }

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const id = formData.get("id");

  const res = await fetch(`${API_TODOS}/${id}`, {
    method: "DELETE",
    headers: HEADERS,
  });

  if (!res.ok) {
    console.log({
      message: `Cannot delete todo. Error ${res.status}: ${res.statusText}`,
    });
  }

  revalidatePath("/");
}
