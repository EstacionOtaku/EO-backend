import { validationResult } from "express-validator";

const validation = (schemas) => {
  return async (req, res, next) => {
    await Promise.all(schemas.map((schema) => schema.run(req)));

    const result = validationResult(req);
    if (result.isEmpty()) return next();

    const errors = result.array();
    return res.status(422).send(errors);
  };
};

export default validation;
