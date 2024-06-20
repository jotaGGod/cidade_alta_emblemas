import { PrismaClient } from "@prisma/client";
import { executeUserSeed } from "./user-seed";
import { executeBadgeSeed } from './badge-seed';
import { executeUserBadgeSeed } from './user-badge-seed';

const prisma = new PrismaClient();

async function main() {
  await executeUserSeed();
  await executeBadgeSeed();
  await executeUserBadgeSeed();
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
