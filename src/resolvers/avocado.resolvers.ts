import {Avocado} from "api/type";
import { AvocadoService } from "../services/avocado.services";

const avocadoServices = new AvocadoService();

const getAvocados= () => {
  const avocados = avocadoServices.getAvocados();
  return avocados;
}

const getAvocado = (_ : undefined, { id } : {id : string}) => {
  const avocado = avocadoServices.getAvocado(id);
  return avocado;
}

const createAvocado = (_: undefined, { ptoAvocado }: { ptoAvocado: Avocado }) => {
  const newAvocado = avocadoServices.createAvocado(ptoAvocado);
  return newAvocado;
}

const updateAvocado = (_: undefined, { id, ptoAvocado }: { id:string, ptoAvocado: Avocado }) => {
  const updatedAvocado = avocadoServices.updateAvocado(id, ptoAvocado);
  return updatedAvocado;
}

const deleteAvocado = (_: undefined, { id }: { id: string }) => {
  const deletedAvocadoIndex = avocadoServices.deleteAvocado(id);
  return deletedAvocadoIndex;
}

export {
  deleteAvocado, getAvocado,
  getAvocados,
  updateAvocado,
  createAvocado
};

