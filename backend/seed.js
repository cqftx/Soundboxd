const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const radiohead = await prisma.artist.upsert({
    where: { name: "Radiohead" },
    update: {},
    create: { name: "Radiohead" },
  });

  const tsp = await prisma.artist.upsert({
    where: { name: "The Smashing Pumpkins" },
    update: {},
    create: { name: "The Smashing Pumpkins" },
  });

  await prisma.album.createMany({
    data: [
      { title: "Pablo Honey", year: 1993, coverUrl: "", artistId: radiohead.id },
      { title: "The Bends", year: 1995, coverUrl: "", artistId: radiohead.id },
      { title: "OK Computer", year: 1997, coverUrl: "", artistId: radiohead.id },
      { title: "Kid A", year: 2000, coverUrl: "", artistId: radiohead.id },
      { title: "Amnesiac", year: 2001, coverUrl: "", artistId: radiohead.id },
      { title: "In Rainbows", year: 2007, coverUrl: "", artistId: radiohead.id },
      { title: "A Moon Shaped Pool", year: 2016, coverUrl: "", artistId: radiohead.id },

      { title: "Gish", year: 1991, coverUrl: "", artistId: tsp.id },
      { title: "Siamese Dream", year: 1993, coverUrl: "", artistId: tsp.id },
      { title: "Mellon Collie", year: 1995, coverUrl: "", artistId: tsp.id },
      { title: "Adore", year: 1998, coverUrl: "", artistId: tsp.id },
      { title: "Machina", year: 2000, coverUrl: "", artistId: tsp.id },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });