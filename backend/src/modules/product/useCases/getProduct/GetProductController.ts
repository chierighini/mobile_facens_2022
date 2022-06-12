import { Request, Response } from "express";
import { GetProductUseCase } from "./GetProductUseCase";

export class GetProductController {
  async handle(req: Request, res: Response) {
    const getProductUseCase = new GetProductUseCase();

    const result = await getProductUseCase.execute();

    return res.status(200).json(result);
  }
}
