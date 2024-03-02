import { Schema, model } from "mongoose";

const PedidoSchema = new Schema(
  {
    message: {
      type: String,
    },
    date: {
      type: Date,
    },
    uuid: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const PedidoModel = model("pedidos", PedidoSchema);

export default PedidoModel;
