import { Todo } from "..";
import prisma from "../prisma/prismaClient";

export const getTasks = async () => {
  const tasks = await prisma.todo.findMany();
  return tasks;
};

export const createTask = async ({
  title,
  color,
}: Pick<Todo, "title" | "color">) => {
  const newTodo = await prisma.todo.create({
    data: {
      title,
      color,
      completed: false,
    },
  });
  return newTodo;
};

export const deleteTask = async (id: number) => {
  const deleted = await prisma.todo.delete({
    where: {
      id,
    },
  });
  return deleted;
};

export const updateTitle = async (id: number, newTitle: string) => {
  const updated = await prisma.todo.update({
    where: { id },
    data: { title: newTitle, updatedAt: new Date() },
  });
  return updated;
};

export const updateCompleted = async (id: number, completed: string) => {
  const updated = await prisma.todo.update({
    where: { id },
    data: { completed: JSON.parse(completed), updatedAt: new Date() },
  });
  return updated;
};

export const updateColor = async (id: number, newColor: string) => {
  const updated = await prisma.todo.update({
    where: { id },
    data: { color: newColor, updatedAt: new Date() },
  });
  return updated;
};
