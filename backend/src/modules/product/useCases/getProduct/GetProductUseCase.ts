import { Product } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetProductUseCase {
  async execute(): Promise<Product[]> {
    const products = await prisma.product.findMany({
      orderBy: {
        nome: "desc",
      },
      include: {
        product_rent: {
          select: {
            client: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return products;
  }
}
