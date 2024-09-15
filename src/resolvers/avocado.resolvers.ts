import { Attributes, Avocado } from "@prisma/client";
import { AvocadoService } from "../services/avocado.services";

const avocadoService = new AvocadoService();

const getAvocados = async () => {
  try {
    return await avocadoService.getAvocados();
  } catch (error) {
    console.error('Error getting avocados:', error);
    throw new Error('Could not fetch avocados');
  }
}

const getAvocado = async (_: undefined, { id }: { id: string }) => {
  try {
    return await avocadoService.getAvocado(id);
  } catch (error) {
    console.error(`Error getting avocado with id ${id}:`, error);
    throw new Error(`Could not fetch avocado with id ${id}`);
  }
}

const createAvocado = async (_: undefined, { avocado, attributes }: { avocado: Omit<Avocado, 'id'>, attributes: Omit<Attributes, 'id' | 'avocadoId'> }) => {
  try {
    return await avocadoService.createAvocado(avocado, attributes);
  } catch (error) {
    console.error('Error creating avocado:', error);
    throw new Error('Could not create avocado');
  }
}

const updateAvocado = async (_: undefined, { id, avocado, attributes }: { id: string, avocado: Partial<Avocado>, attributes: Partial<Attributes> }) => {
  try {
    return await avocadoService.updateAvocado(id, avocado, attributes);
  } catch (error) {
    console.error(`Error updating avocado with id ${id}:`, error);
    throw new Error(`Could not update avocado with id ${id}`);
  }
}

const deleteAvocado = async (_: undefined, { id }: { id: string }) => {
  try {
    return await avocadoService.deleteAvocado(id);
  } catch (error) {
    console.error(`Error deleting avocado with id ${id}:`, error);
    throw new Error(`Could not delete avocado with id ${id}`);
  }
}

export {
  createAvocado, deleteAvocado, getAvocado,
  getAvocados, updateAvocado
};
