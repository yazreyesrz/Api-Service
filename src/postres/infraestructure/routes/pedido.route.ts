import { Router } from "express";
import { PedidoUseCase } from "../../application/pedidoUseCase";
import { PedidoController } from "../controllers/pedido.ctrl";
import { MongoRepository } from "../repositories/mongo.repository";
import { EmitNewPedidoUseCase } from "../../application/services/emitNewPedido";
import { EmitingNewPedido } from "../services/socketIo";
import { Broker } from "../services/rabbitqm";
const pedidoroute = Router();
const broker = new Broker();
const mongoRepository = new MongoRepository();
const emitIo = new EmitingNewPedido();
const emitService = new EmitNewPedidoUseCase(emitIo);
const pedidoUseCase = new PedidoUseCase(mongoRepository, broker, emitService);
const pedidoCtrl = new PedidoController(pedidoUseCase);

pedidoroute.post("/pedido", async (req, res) => {
  await pedidoCtrl.createCtrl(req, res);
});

export default pedidoroute;
