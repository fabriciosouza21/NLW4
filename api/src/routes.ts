import { Router } from "express"
import { UsersControllers } from "./controllers/usercontrollers";

const router = Router();

const usersControllers = new UsersControllers();

router.post("/users", usersControllers.create);

export { router };