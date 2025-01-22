import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const todos = [
    {
      title: "Hold it now and watch the hoodwink",
      color: "blue",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Summon fish to the dish",
      color: "green",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "bust rhymes",
      color: "red",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Make a break and take a fake",
      color: "yellow",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "sign a waiver",
      color: "purple",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "wear my mind on my sleeve",
      color: "cyan",
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "take off my shirt",
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
