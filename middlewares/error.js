import { envMode } from "../app.js";

export const errorMiddleware = (err, req, res, next)=> {

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  const response = {
    success: false,
    message: message,
  };

  if (envMode === "DEVELOPMENT") {
    response.error = err;
  }

  return res.status(statusCode).json(response);

};

export const TryCatch = (passedFunc) => async (req, res, next) => {
  try {
    await passedFunc(req, res, next);
  } catch (error) {
    next(error);
  }
};


