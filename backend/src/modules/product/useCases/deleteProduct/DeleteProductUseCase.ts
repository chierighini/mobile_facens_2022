import { Product } from "@prisma/client";

import { prisma } from "../../../../prisma/client";

import { DeleteProductDTO } from "../../dtos/DeleteProductDTO";

export class DeleteProductUseCase {
  async execute({ nome }: DeleteProductDTO): Promise<Product> {
    // Criar o produto
    const deleteProductByName = await prisma.product.delete({
      where: {
        nome,
      },
    });

    return deleteProductByName;
  }
}
