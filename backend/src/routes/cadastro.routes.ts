import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import { GetUserByEmailController } from "../modules/users/useCases/geUserByEmail/GetUserByEmailController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserByEmailController = new GetUserByEmailController();

const casdatroRoutes = Router();

casdatroRoutes.post("/", createUserController.handle);
casdatroRoutes.get("/", getAllUsersController.handle);
casdatroRoutes.get("/login", getUserByEmailController.handle);

export { casdatroRoutes };
