import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Task from "../entities/Task";

const ColumnController = {
  add: async (request: Request, response: Response) => {
    const { columnId, content } = request.body;

    const newTask = await getRepository(Task).save(
      new Task({ column: columnId, content })
    );

    response.status(200).json(newTask);
  },
};

export default ColumnController;
