import { Request, Response } from "express";
import { PedidoUseCase } from "../../application/pedidoUseCase";

export class PedidoController {
  constructor(private pedidoUseCase: PedidoUseCase) {
    this.createCtrl = this.createCtrl.bind(this);
  }

  public async createCtrl({ body }: Request, res: Response) {
    const pedido = await this.pedidoUseCase.registerPedidos.execute(body);
    res.send({ pedido });
  }
}
