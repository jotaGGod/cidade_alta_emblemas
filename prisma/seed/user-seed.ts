import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

export async function executeUserSeed() {
  await prisma.user.createMany({
    data: [
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
    ],
  });
}
