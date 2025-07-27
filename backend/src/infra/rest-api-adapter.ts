import Controller from "@/infra/controller";
import { RequestPayload } from "@/application/data/interfaces/core/RequestPayload";
import { jsonize } from "@/main/utils/jsonize";
import { Request, Response, NextFunction } from "express";

export const restAPIAdapter = <T>(controller: Controller<T>): (req: Request, res: Response, next: NextFunction) => Promise<any> => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { body, params, query } = req;

        try {
            
            const payload: RequestPayload = {
                body: jsonize(body),
                params: jsonize(params),
                query: jsonize(query)
            }
            const response = await controller.validateAndRun(payload);

            res.status(200).json({
                response
            })
        } catch(error) {
            res.status(500).json({
                response: "Internal Server"
            })
        }
    }
}