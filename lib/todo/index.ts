import { supabase } from "@/lib/supabase/client";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
  created_at: string;
};

export async function getTodos() {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data as Todo[];
}

export async function createTodo(title: string) {
  const { error } = await supabase.from("todos").insert({ title });
  if (error) throw error;
}

export async function updateTodo(id: number, changes: Partial<Pick<Todo, "title" | "done">>) {
  const { error } = await supabase.from("todos").update(changes).eq("id", id);
  if (error) throw error;
}

export async function deleteTodo(id: number) {
  const { error } = await supabase.from("todos").delete().eq("id", id);
  if (error) throw error;
}