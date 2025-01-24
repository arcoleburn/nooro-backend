import express, { Request, Response } from "express";
import cors from "cors";
import {
  createTask,
  deleteTask,
  getTasks,
  updateCompleted,
  updateColor,
  updateTitle,
} from "./services/taskService";

export interface Todo {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/tasks", async (_req: Request, res: Response) => {
  const tasks = await getTasks();
  res.json(tasks);
});
app.get("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const taskId = parseInt(id);

  const tasks = await getTasks();
  const task = tasks.find((task) => task.id === taskId);

  res.json(task);
});

app.post(
  "/tasks",
  async (req: Request<{}, {}, Partial<Todo>>, res: Response) => {
    const { title, color } = req.body;

    if (!title || !color) {
      return res.status(400).json({
        error: `Title and color are required. Title: ${title || ""}, Color: ${
          color || ""
        } `,
      });
    }
    try {
      const newTodo = await createTask({ title, color });
      return res.status(201).json(newTodo);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "failed to create task" });
    }
  }
);

app.put("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const taskId = parseInt(id);
  const { title, color, completed } = req.body;
  try {
    let updatedTask;

    if (title) {
      updatedTask = await updateTitle(taskId, title);
    }
    if (color) {
      updatedTask = await updateColor(taskId, color);
    }
    if (completed !== undefined) {
      updatedTask = await updateCompleted(taskId, completed);
    }

    if (!updatedTask) {
      return res.status(400).json({
        error: `no valid update provided. one of title, color, or completed status needed`,
      });
    }
    return res.json(updatedTask);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "failed to update task" });
  }
});

app.delete("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await deleteTask(parseInt(id));
    return res.json(deleted);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "failed to delete task" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Nothing here, chap...");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
