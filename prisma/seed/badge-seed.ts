import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function executeBadgeSeed() {
  await prisma.badges.createMany({
    data: [
      {
        id: "cf98a1a1-4a67-4d61-8a4e-1f9b4a5e4d6f",
        slug: "cda",
        name: "Cidade Alta",
        image: "https://cidadealtarp.com/imagens/challenge/cidade-alta.png"
      },
      {
        id: "0b64f1d1-5b85-4a8d-8c6a-2b6e1a5f8d7e",
        slug: "cda-valley",
        name: "Cidade Alta Valley",
        image: "https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png"
      },
      {
        id: "2c3e7b1d-3a67-4b8e-8d2a-4b8c3e5f6a7b",
        slug: "policia",
        name: "Policia do Cidade Alta",
        image: "https://cidadealtarp.com/imagens/challenge/policia.png"
      },
      {
        id: "5d6f7b1c-7b8e-4d8e-8c5a-3b8d4e5f7a9c",
        slug: "hospital",
        name: "Hospital do Cidade Alta",
        image: "https://cidadealtarp.com/imagens/challenge/hospital.png"
      },
      {
        id: "8a9b1c1e-6b8f-4a6d-8c5a-2b6c1d5f8a7d",
        slug: "mecanica",
        name: "Mecânica do Cidade Alta",
        image: "https://cidadealtarp.com/imagens/challenge/mecanica.png"
      },
      {
        id: "7c8d9b1e-5b6f-4a8c-8c4a-1b7d3e5f6a8b",
        slug: "taxi",
        name: "Taxi do Cidade Alta",
        image: "https://cidadealtarp.com/imagens/challenge/taxi.png"
      },
      {
        id: "1b2c3e4d-5a6b-4d8c-8e5a-2b6d4f7a8c9d",
        slug: "coruja",
        name: "Coruja",
        image: "https://cidadealtarp.com/imagens/challenge/coruja.png"
      },
      {
        id: "3d4e5f1b-6a7c-4d8e-8c2a-1b8d6f4a7c9b",
        slug: "hiena",
        name: "Hiena",
        image: "https://cidadealtarp.com/imagens/challenge/hiena.png"
      },
      {
        id: "6f7a8b1d-9c2e-4a5b-8d6a-3b8d1e5f7a4c",
        slug: "gato",
        name: "Gato",
        image: "https://cidadealtarp.com/imagens/challenge/gato.png"
      },
      {
        id: "9b1c2e3d-4a5b-6d8e-8c1a-2b7d4f5a6a8b",
        slug: "urso",
        name: "Urso",
        image: "https://cidadealtarp.com/imagens/challenge/urso.png"
      },
    ],
  });
}
