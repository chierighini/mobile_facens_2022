import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateProductDTO } from "../../dtos/CreateProductDTO";

export class UpdateProductUseCase {
  async execute({
    nome,
    marca,
    preco,
    quantidade,
  }: CreateProductDTO): Promise<Product> {
    // Criar o produto
    const updatedProductByName = await prisma.product.update({
      where: {
        nome,
      },
      data: {
        nome,
        marca,
        preco,
        quantidade,
      },
    });

    return updatedProductByName;
  }
}
