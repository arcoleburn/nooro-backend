import { PrismaClient } from "@prisma/client";
export const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-amber-700",
];
const prisma = new PrismaClient();

async function main() {
  const todos = [
    {
      title: "Hold it now and watch the hoodwink",
      color: colors[Math.floor(Math.random() * colors.length)],
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Summon fish to the dish",
      color: colors[Math.floor(Math.random() * colors.length)],
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "bust rhymes",
      color: colors[Math.floor(Math.random() * colors.length)],
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Make a break and take a fake",
      color: colors[Math.floor(Math.random() * colors.length)],
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "sign a waiver",
      color: colors[Math.floor(Math.random() * colors.length)],
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "wear my mind on my sleeve",
      color: colors[Math.floor(Math.random() * colors.length)],
      completed: Math.random() < 0.5, // Random boolean
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "take off my shirt",
      color: colors[Math.floor(Math.random() * colors.length)],
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
