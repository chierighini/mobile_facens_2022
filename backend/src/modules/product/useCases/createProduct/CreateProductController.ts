import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { nome, marca, preco, quantidade } = req.body;

    const createProductUseCase = new CreateProductUseCase();

    const result = await createProductUseCase.execute({
      nome,
      marca,
      preco,
      quantidade,
    });

    return res.status(201).json(result);
  }
}
