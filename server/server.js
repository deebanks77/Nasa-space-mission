const http = require("http");
const { loadPlanetData } = require("./src/models/planet.model");
require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function StartServer() {
  await loadPlanetData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

StartServer();
