import { Attributes, Avocado, PrismaClient } from '@prisma/client';

export class AvocadoService {

  private prisma: PrismaClient;
  private DB: PrismaClient['avocado'];

  constructor() {
    this.prisma = new PrismaClient();
    this.DB = this.prisma.avocado;
  }

  async getAvocados() {
    return await this.DB.findMany({
      include: {
        attributes: true
      }
    });
  }

  async getAvocado(id: string) {
    return await this.DB.findUnique({
      where: { id: Number(id) },
      include: { attributes: true } // Incluir los atributos
    });
  }

  async createAvocado(newAvocado: Omit<Avocado, 'id'>, attributes: Omit<Attributes, 'id' | 'avocadoId'>) {
    return await this.DB.create({
      data: {
        ...newAvocado,
        attributes: {
          create: attributes // Crea los atributos asociados al aguacate
        }
      },
      include: {
        attributes: true
      }
    });
  }

  async updateAvocado(id: string, data: Partial<Avocado>, attributes: Partial<Attributes>){
    return await this.DB.update({
      where: { id : Number(id) },
      data: {
        ...data,
        attributes: {
          update: attributes
        }
      },
      include: {
        attributes: true
      }
    });
  }

  async deleteAvocado(id: string) {
    await this.prisma.attributes.deleteMany({
      where: {
        avocadoId: Number(id)
      }
    });

    return await this.DB.delete({
      where: {
        id: Number(id),
      },
      include: { attributes: true } // Esto se asegura de que se borren ambos
    });
  }
}