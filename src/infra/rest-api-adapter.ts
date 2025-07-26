import Controller from "@/application/data/contracts/controller";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import { Request, Response, NextFunction } from "express";

export const restAPIAdapter = (controller: Controller): (req: Request, res: Response, next: NextFunction) => Promise<void> => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { body, params, query } = req;

        const payload: RequestPayload = {
            body,
            params,
            query
        }
        const response = await controller.validateAndRun(payload)
        res.send(200).json({
            status: 200,
            body: response
        })
    }
}