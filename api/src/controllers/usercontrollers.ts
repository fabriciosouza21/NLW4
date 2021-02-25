import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
class UsersControllers {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const usersRepository = getRepository(User);
        const usersAlreadyExist = await usersRepository.findOne({
            email
        });
        if (usersAlreadyExist) {
            return response.status(400).json({
                erro: "User Already Exist",
            });
        }
        const user = usersRepository.create({
            name, email
        });
        await usersRepository.save(user);
        return response.json(user);
    }
}

export { UsersControllers }