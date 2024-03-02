import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

const dbInit = async () => {
  await connect(DB_URI);
  console.log("Mongodb Conectado correctamente");
};

export default dbInit;
