import { Client } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
  async execute(): Promise<Client[]> {
    const users = await prisma.client.findMany({
      include: {
        product_rent: {
          select: {
            client: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return users;
  }
}
