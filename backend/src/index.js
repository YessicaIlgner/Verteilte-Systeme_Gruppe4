import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import hotelRoutes from "./routes/hotelRoutes.js";
import swaggerDocs from "../swaggerDocs.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/hotels", hotelRoutes);
app.use("/hotels/rooms", hotelRoutes);
app.use("/hotels/employees", hotelRoutes);
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});
//Ausgabe auf welchem Port der Server läuft
app.listen(port, () => {
  console.log(`Server läuft auf: http://localhost:${port}`);
});
