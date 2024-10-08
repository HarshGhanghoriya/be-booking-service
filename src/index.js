const express = require("express");
const { PORT } = require("./config/serverConfig.js");
const db = require("./models/index.js");
const app = express();
const apiRoutes = require("./routes/index.js");
function startTheServer() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log("server started on port", PORT);
    if (process.env.SYNC_DB) {
      await db.sequelize.sync({ alter: true });
    }
  });
}

startTheServer();
