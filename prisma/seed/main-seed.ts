import { PrismaClient } from "@prisma/client";
import { executeUserSeed } from "./user-seed";
import { executeBadgeSeed } from './badge-seed';

const prisma = new PrismaClient();

async function main() {
  await executeUserSeed();
  await executeBadgeSeed();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
