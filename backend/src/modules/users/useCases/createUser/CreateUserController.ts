import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      email,
      pwd,
      name,
      birthday,
      document,
      address,
      houseNumber,
      district,
      city,
      cep,
    } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      email,
      pwd,
      name,
      birthday,
      document,
      address,
      houseNumber,
      district,
      city,
      cep,
    });

    return res.status(201).json(result);
  }
}
