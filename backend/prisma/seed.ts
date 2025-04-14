import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      email: 'user1@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      email: 'user2@example.com',
    },
  });

  const chatRoom = await prisma.chatRoom.create({
    data: {
      name: 'Chat 1',
      participants: {
        create: [{ userId: user1.id }, { userId: user2.id }],
      },
    },
  });

  await prisma.message.create({
    data: {
      content: 'Hello, User2!',
      senderId: user1.id,
      roomId: chatRoom.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'Hi, User1!',
      senderId: user2.id,
      roomId: chatRoom.id,
    },
  });

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    void prisma.$disconnect();
  });
