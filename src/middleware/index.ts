import { NextFunction, Response, Request } from "express";

export const notFoundMiddleware = (req: Request, res: Response) => {
   throw ({ msg: "Page not found" , code: 404});
};

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
   console.error('main error 😪, \n' ,err?.message || err);

   return res
      .status(err.statusCode || 500)
      .json({ message: err.msg || 'something went wrong', obj: err.obj, success: false });
};