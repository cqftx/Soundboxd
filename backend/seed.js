const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // ARTYŚCI
  const radiohead = await prisma.artist.create({
    data: {
      name: "Radiohead",
    },
  });

  const tsp = await prisma.artist.create({
    data: {
      name: "The Smashing Pumpkins",
    },
  });

  // ALBUMY
  await prisma.album.createMany({
    data: [
      {
        title: "Pablo Honey",
        year: 1993,
        coverUrl: "",
        artistId: radiohead.id,
      },
      {
        title: "The Bends",
        year: 1995,
        coverUrl: "",
        artistId: radiohead.id,
      },
      {
        title: "Gish",
        year: 1991,
        coverUrl: "",
        artistId: tsp.id,
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });