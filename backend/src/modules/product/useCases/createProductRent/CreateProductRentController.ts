import { Request, Response } from "express";
import { CreateProductRentUseCase } from "./CreateProductRentUseCase";

export class CreateProductRentController {
  async handle(req: Request, res: Response) {
    const { productId, clientId } = req.body;

    const createProductRentUseCase = new CreateProductRentUseCase();

    await createProductRentUseCase.execute({ productId, clientId });

    return res.status(201).send();
  }
}
