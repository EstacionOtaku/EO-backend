import { jwtVerify } from "../helpers/jwt";

// Validar que exista un token y que este sea correcto
const authentication = (request, response, next) => {
  const { authorization } = request.headers;

  // Validar si existe el Authorization en el encabezado
  if (!authorization)
    return response.status(403).json({
      message: "Login is required",
    });

  const accessToken = authorization.split(" ")[1];

  try {
    const payload = jwtVerify(accessToken);
    request.current_user = payload.user;
    return next();
  } catch (error) {
    console.error(error.message);
    return response.status(403).json({
      message: "AccessToken Wrong or Expire",
    });
  }
};

export default authentication;
