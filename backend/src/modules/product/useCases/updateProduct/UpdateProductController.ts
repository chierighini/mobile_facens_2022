import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { nome, marca, preco, quantidade } = req.body;

    const updateProductUseCase = new UpdateProductUseCase();

    const result = await updateProductUseCase.execute({
      nome,
      marca,
      preco,
      quantidade,
    });

    return res.status(201).json(result);
  }
}
