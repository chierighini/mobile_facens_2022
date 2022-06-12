import { Request, Response } from "express";

import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body;

    const deleteProductUseCase = new DeleteProductUseCase();

    const result = await deleteProductUseCase.execute({
      nome,
    });

    return res.status(201).json(result);
  }
}
