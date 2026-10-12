"use client";

import { useEffect, useState } from "react";
import Button from "../../components/basic/Button";
import Card from "../../components/basic/Card";
import EmptyState from "../../components/basic/EmptyState";
import Table, { Column } from "../../components/basic/Table";
import TextField from "../../components/basic/TextField";
import { Todo, getTodos, createTodo, updateTodo, deleteTodo } from "../../lib/todo";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getTodos().then(setTodos).catch((e) => setError(e.message));
  }, []);

  async function refresh() {
    setTodos(await getTodos());
  }

  async function handleAdd() {
    if (!title.trim()) return;
    try {
      await createTodo(title.trim());
      setTitle("");
      await refresh();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  async function handleToggle(todo: Todo) {
    await updateTodo(todo.id, { done: !todo.done });
    await refresh();
  }

  async function handleDelete(id: number) {
    await deleteTodo(id);
    await refresh();
  }

  const columns: Column<Todo>[] = [
    {
      header: "Done",
      render: (t) => (
        <input type="checkbox" checked={t.done} onChange={() => handleToggle(t)} />
      ),
    },
    {
      header: "Task",
      render: (t) => <span className={t.done ? "line-through text-ink/40" : ""}>{t.title}</span>,
    },
    {
      header: "",
      align: "right",
      render: (t) => (
        <Button variant="secondary" onClick={() => handleDelete(t.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl font-bold">To-do playground</h1>
        <p className="max-w-xl text-sm text-ink/60">
          A tiny CRUD example. Read the code in <span className="font-mono">lib/todos</span> and
          this page to see how create, read, update, and delete work with Supabase.
        </p>
      </header>

      <Card className="max-w-md space-y-4">
        <TextField
          label="New task"
          placeholder="What needs doing?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={error}
        />
        <Button onClick={handleAdd}>Add task</Button>
      </Card>

      <Table
        data={todos}
        columns={columns}
        empty={<EmptyState title="No tasks yet" hint="Add one above." />}
      />
    </div>
  );
}