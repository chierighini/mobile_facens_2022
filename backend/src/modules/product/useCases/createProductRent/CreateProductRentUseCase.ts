import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateProductRentDTO } from "../../dtos/CreateProductRentDTO";

export class CreateProductRentUseCase {
  async execute({ clientId, productId }: CreateProductRentDTO): Promise<void> {
    // verificar se filme existe
    const movieExists = await prisma.product.findUnique({
      where: {
        id: clientId,
      },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }

    const movieAlreadyRented = await prisma.productRent.findFirst({
      where: {
        productId,
      },
    });

    // verificar se filme já nao está alugado
    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    // verificar se usuário existe
    const userExists = await prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exists!");
    }

    // criar locação
    await prisma.productRent.create({
      data: {
        productId,
        clientId,
      },
    });
  }
}
