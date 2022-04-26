import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

const postData = [
  {
    title: 'tale1',
    body: 'djiasjdoiasjdiojiojdiasjdioasdsa',
  },
  {
    title: 'tale2',
    body: 'jkljjiojiojiojijiojijiojiojiojoi',
  },
];

async function main() {
  console.log('Start seeding ...');
  for (const u of postData) {
    const post = await prisma.post.create({
      data: u,
    });
    console.log(`Created post with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
