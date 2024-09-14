import {Avocado} from "api/type";
import { avocadosList } from "../database/avocados";

export class AvocadoService {

  avocados: Avocado[];

  constructor() {
    this.avocados = avocadosList;
  }

  getAvocados() {
    return this.avocados;
  }

  getAvocado(id: string) {
    return this.avocados.find((avocado) => avocado.ID === id);
  }

  createAvocado(newAvocado: Avocado) {
    this.avocados.push(newAvocado);
    return newAvocado;
  }

  updateAvocado(id: string, body: Avocado) {
    const index = this.avocados.findIndex((avocado) => avocado.ID === id);
    if (index == -1) {
      return null;
    }
    this.avocados[index] = body;
    return this.avocados[index];
  }

  deleteAvocado(id: string) {
    const index = this.avocados.findIndex((avocado) => avocado.ID === id);
    if (index == -1) {
      return null;
    }
    this.avocados.splice(index, 1);
    return id;
  }

}