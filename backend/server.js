const express = require("express");
const cors = require("cors");
require("dotenv").config();

const prisma = require("./prismaClient");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

console.log("REGISTERING /albums ROUTE");

app.get("/albums", async (req, res) => {
  try {
    const albums = await prisma.album.findMany();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});