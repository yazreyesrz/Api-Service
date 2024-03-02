import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "../database/mongodb";
import pedidoroute from "./postres/infraestructure/routes/pedido.route";
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 1001;

app.use(pedidoroute);

db().then();
app.listen(port, () => console.log("Servidor iniciado en el puerto " + port));
