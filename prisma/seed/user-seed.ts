import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

export async function executeUserSeed() {
  await prisma.user.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "9f47a08d-4c58-4b9b-bb4d-53e9b1a7f8a7",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "2a7db490-1c61-4c67-8b4a-4f94c2e1d8a8",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "d9b19c84-067f-4c3c-aad8-5e1d3d6d7e2a",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "1b7d4b6c-8cfb-48c1-b17e-67c2f9b33b55",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "72dce4a4-5a1f-4bcf-9f3d-80f4b8d8e8e8",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "f17b57e1-3af5-451d-bfd3-9185bc94e83d",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "4e99b1d7-61a3-4c2d-a5e8-3ebc6a765c39",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "2b3497da-d3b5-48a5-bda2-646bf32d7bc5",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "59e7a96a-8b0a-4cf6-936f-4b73f5c93d74",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "e29429bb-634f-4a29-b567-92f61b5dff93",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "c41d4b8c-6a3e-4d47-90b5-5ae4a1f8c89a",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "7644f0a1-4c5d-4a87-bc2e-0fa6a3a7e57b",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "a2a45f6d-8f2f-4f94-9e64-6f24c0d6c07e",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "1e5c5e9c-755e-4d9e-9d6b-83f4e3d7e5b3",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "8f92b6c7-4c78-48e6-afe6-8b6b3e3f8d2d",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "6d8c8a1d-1f6b-48d5-8c5a-7c8b1d3f6c4e",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "24fbc7a1-3b3e-4e4f-9a5a-6b7f9a6d7c4f",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "2c4d1e6f-1b5e-40d6-8e2f-5b6c8d3e5f6a",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
      {
        id: "f27a1d7b-8d2f-4a6f-b9a3-7d4b2e6c8d5f",
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        is_active: faker.datatype.boolean()
      },
    ],
  });
}
