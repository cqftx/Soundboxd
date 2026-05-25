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

  const oasis = await prisma.artist.upsert({
    where: { name: "Oasis" },
    update: {},
    create: { name: "Oasis" },
  });

  await prisma.album.createMany({
    data: [
      {
        title: "Pablo Honey",
        year: 1993,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg",
        spotifyUrl: "https://open.spotify.com/album/3gBVdu4a1MMJVMy6vwPEb8",
        artistId: radiohead.id,
      },
      {
        title: "The Bends",
        year: 1995,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png",
        spotifyUrl: "https://open.spotify.com/album/35UJLpClj5EDrhpNIi4DFg",
        artistId: radiohead.id,
      },
      {
        title: "OK Computer",
        year: 1997,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",
        spotifyUrl: "https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE",
        artistId: radiohead.id,
      },
      {
        title: "Kid A",
        year: 2000,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png",
        spotifyUrl: "https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7",
        artistId: radiohead.id,
      },
      {
        title: "Amnesiac",
        year: 2001,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/Radiohead_-_Amnesiac_cover.png",
        spotifyUrl: "https://open.spotify.com/album/1HrMmB5useeZ0F5lHrMvl0",
        artistId: radiohead.id,
      },
      {
        title: "I Might Be Wrong",
        year: 2001,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/5/5b/Radiohead.imightbewrong.albumart.jpg",
        spotifyUrl: "https://open.spotify.com/album/6svTt5o2lUgIrgYDKVmdnD",
        artistId: radiohead.id
      },
      {
        title: "Hail To The Thief",
        year: 2003,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/6/61/Radioheadhailtothethief.png",
        spotifyUrl: "https://open.spotify.com/album/5mzoI3VH0ZWk1pLFR6RoYy",
        artistId: radiohead.id,
      },
      {
        title: "In Rainbows (Disk 2)",
        year: 2007,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/9d/In_Rainbows_Disk_2_Official_Cover.png",
        spotifyUrl: "https://open.spotify.com/album/6zTAW5oRuOmxJuUHhcQope?si=EfRJs5WoQGKF40OVdQvoJg",
        artistId: radiohead.id,
      },
      {
        title: "In Rainbows",
        year: 2007,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png",
        spotifyUrl: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
        artistId: radiohead.id,
      },
      {
        title: "The King Of Limbs",
        year: 2011,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/a/a2/Radioheadthekingoflimbs.png",
        spotifyUrl: "https://open.spotify.com/album/3P17levwUPzmFfLYdAK3A7?si=tiZAY4XFRkuN-exl2GMk4w",
        artistId: radiohead.id,
      },
      {
        title: "TKOL RMX 1234567",
        year: 2011,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/TKOL_RMX_1234567.png",
        spotifyUrl: "https://open.spotify.com/album/566osTxDsfrtdBxPDMGufx?si=5Tn93x5PSYOouY1PYu7KlA",
        artistId: radiohead.id,
      },
      {
        title: "A Moon Shaped Pool",
        year: 2016,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/6/6a/Amoonshapedpool.png",
        spotifyUrl: "https://open.spotify.com/album/2ix8vWvvSp2Yo7rKMiWpkg",
        artistId: radiohead.id,
      },
      {
        title: "OK Computer OKNOTOK 1997 2017",
        year: 2017,
        coverUrl: "https://upload.wikimedia.org/wikipedia/ru/5/5b/Radiohead.oknotok.albumart.jpg",
        spotifyUrl: "https://open.spotify.com/album/0tzfI6NFJqcJkWb23R3lRZ?si=CFni1zzQT1aNyNGw-tIJgw",
        artistId: radiohead.id,
      },
      {
        title: "KID A MNESIA",
        year: 2021,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Cover_art_of_Kid_A_Mnesia_Radiohead.jpeg",
        spotifyUrl: "https://open.spotify.com/album/6ofEQubaL265rIW6WnCU8y?si=NMeUo4pZSOysus8zhkoMqg",
        artistId: radiohead.id,
      },
      {
        title: "Hail to the Thief (Live Recordings 2003–2009)",
        year: 2025,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/c/cf/HailLiveRecordings.jpg",
        spotifyUrl: "https://open.spotify.com/album/5BLrEOEDKoDDg5T8PzdIHN?si=4cThHBbZTiOQYt5chS5yLA",
        artistId: radiohead.id,
      },

      {
        title: "Gish",
        year: 1991,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/SmashingPumpkins-Gish.jpg",
        spotifyUrl: "https://open.spotify.com/album/7wJTn94PWzZ3zE0lg3qhld?si=KRflCfKJRQKpE3sN5FLeCA",
        artistId: tsp.id,
      },
      {
        title: "Siamese Dream",
        year: 1993,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/SmashingPumpkins-SiameseDream.jpg",
        spotifyUrl: "https://open.spotify.com/album/0bQglEvsHphrS19FGODEGo?si=tfQUxkWkRdyB_CY6PF4jHg",
        artistId: tsp.id,
      },
      {
        title: "Pisces Iscariot",
        year: 1993,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/SmashingPumpkins-PiscesIscariot.png",
        spotifyUrl: "https://open.spotify.com/album/0WMWadJs4xUOIv5bmgR79W?si=X01zLwSERRGsvW7Q0Ed4oQ",
        artistId: tsp.id,
      },
      {
        title: "Mellon Collie and the Infinite Sadness",
        year: 1995,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/7/76/The_Smashing_Pumpkins_-_Mellon_Collie_And_The_infinite_Sadness.jpg",
        spotifyUrl: "https://open.spotify.com/album/55RhFRyQFihIyGf61MgcfV?si=IhtOOAAXS_aOnTeT2yH7yA",
        artistId: tsp.id,
      },
      {
        title: "Adore",
        year: 1998,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/b4/SmashingPumpkins-Adore.jpg",
        spotifyUrl: "https://open.spotify.com/album/4vEwMwa4AemWV8Ws7nQuYi?si=QVyjUH2uR_qiF1FagBv_3w",
        artistId: tsp.id,
      },
      {
        title: "Machina/The Machines of God",
        year: 2000,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/The_smashing_pumpkins_machina_cover.jpg",
        spotifyUrl: "https://open.spotify.com/album/4hrZp6mKgz0HG7UpRbNYQx?si=c0VLN7srT7ap4CPdrzlDwQ",
        artistId: tsp.id,
      },
      {
        title: "Definetely Maybe",
        year: 1994,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/OasisDefinitelyMaybealbumcover.jpg",
        spotifyUrl: "https://open.spotify.com/album/50xG9YujTzMGaLHfJTskBy?si=VdAYkXVQTxW7RFNqJVhiKA",
        artistId: oasis.id,
      },
      {
        title: "(What's the Story) Morning Glory?",
        year: 1995,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Oasis_-_%28What%27s_The_Story%29_Morning_Glory_album_cover.jpg",
        spotifyUrl: "https://open.spotify.com/album/1VW1MFNstaJuygaoTPkdCk?si=cmXwhklvTdW2xMBti89lEQ",
        artistId: oasis.id,
      },
      {
        title: "Be Here Now",
        year: 1997,
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/08/BeHereNowcover.jpg",
        spotifyUrl: "https://open.spotify.com/album/4v3p8Xcv94Z7YAtlurC9Zi?si=BZPerKrbQ92rxMxKTadE-w",
        artistId: oasis.id,
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });