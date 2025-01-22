import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const todos = [
    {
      title: "Finish React project",
      color: "blue",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Buy groceries",
      color: "green",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Read a new book",
      color: "red",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Plan weekend trip",
      color: "yellow",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Learn TypeScript basics",
      color: "purple",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await prisma.todo.createMany({
    data: todos,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
