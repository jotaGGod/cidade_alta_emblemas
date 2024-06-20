import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function executeUserBadgeSeed() {
  await prisma.userBadges.createMany({
    data: [
      {
        users_id: "550e8400-e29b-41d4-a716-446655440000",
        badges_id: "cf98a1a1-4a67-4d61-8a4e-1f9b4a5e4d6f",
        created_at: new Date()
      },
      {
        users_id: "9f47a08d-4c58-4b9b-bb4d-53e9b1a7f8a7",
        badges_id: "0b64f1d1-5b85-4a8d-8c6a-2b6e1a5f8d7e",
        created_at: new Date()
      },
      {
        users_id: "2a7db490-1c61-4c67-8b4a-4f94c2e1d8a8",
        badges_id: "2c3e7b1d-3a67-4b8e-8d2a-4b8c3e5f6a7b",
        created_at: new Date()
      },
      {
        users_id: "d9b19c84-067f-4c3c-aad8-5e1d3d6d7e2a",
        badges_id: "5d6f7b1c-7b8e-4d8e-8c5a-3b8d4e5f7a9c",
        created_at: new Date()
      },
      {
        users_id: "1b7d4b6c-8cfb-48c1-b17e-67c2f9b33b55",
        badges_id: "8a9b1c1e-6b8f-4a6d-8c5a-2b6c1d5f8a7d",
        created_at: new Date()
      },
      {
        users_id: "72dce4a4-5a1f-4bcf-9f3d-80f4b8d8e8e8",
        badges_id: "7c8d9b1e-5b6f-4a8c-8c4a-1b7d3e5f6a8b",
        created_at: new Date()
      },
      {
        users_id: "f17b57e1-3af5-451d-bfd3-9185bc94e83d",
        badges_id: "1b2c3e4d-5a6b-4d8c-8e5a-2b6d4f7a8c9d",
        created_at: new Date()
      },
      {
        users_id: "4e99b1d7-61a3-4c2d-a5e8-3ebc6a765c39",
        badges_id: "3d4e5f1b-6a7c-4d8e-8c2a-1b8d6f4a7c9b",
        created_at: new Date()
      },
      {
        users_id: "2b3497da-d3b5-48a5-bda2-646bf32d7bc5",
        badges_id: "6f7a8b1d-9c2e-4a5b-8d6a-3b8d1e5f7a4c",
        created_at: new Date()
      },
      {
        users_id: "59e7a96a-8b0a-4cf6-936f-4b73f5c93d74",
        badges_id: "9b1c2e3d-4a5b-6d8e-8c1a-2b7d4f5a6a8b",
        created_at: new Date()
      },
    ],
  });
}
