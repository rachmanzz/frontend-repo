import {Request, Response} from "express";
export type expressHandler <RQ, RS>= (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: Request<any, any, RQ>,
    res: Response<RS>
) => void

export type JSONResponseResultType<T> = {
    status: "OK" | "CREATED" | "NOTFOUND" | "ERROR"
    data?: T,
    message?: string
    errors?: unknown
}
