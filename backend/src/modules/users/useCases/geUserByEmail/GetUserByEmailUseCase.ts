import { Client } from "@prisma/client";

import { prisma } from "../../../../prisma/client";

export class GetUserByEmailUseCase {
  async execute(): Promise<Client[]> {
    const result = await prisma.client.findMany({
      where: { email },
    });

    return result;
  }
}
