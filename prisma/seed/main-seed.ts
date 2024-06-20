import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { executeUserSeed } from "./user-seed";

async function main() {
  await executeUserSeed();
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
