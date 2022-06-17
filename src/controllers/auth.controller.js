import { users } from "../models";
import { BaseException } from "../exceptions/expressException";
import { jwtSignIn, jwtVerify } from "../helpers/jwt";

class AuthController {
  constructor() {
    this.model = users;
  }

  async signUp(request, response) {
    try {
      const { username, email, password } = request.body;
      const record = this.model.build({
        username,
        email,
        password,
        role_id: 2,
      });
      await record.hashPassword();
      await record.save();
      return response.status(201).json(record);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async signIn(request, response) {
    try {
      const { username, password } = request.body;

      const user = await this.model.findOne({
        where: {
          username,
        },
      });

      if (!user) throw new BaseException("User not found");
      const validatePassword = await user.validatePassword(password);
      if (!validatePassword) throw new BaseException("Password is incorrect");

      const authToken = jwtSignIn({ user });
      return response.status(200).json({
        access_token: authToken.accessToken,
        refresh_token: authToken.refreshToken,
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async refreshToken(request, response) {
    try {
      const { refresh_token } = request.body;
      const payload = jwtVerify(refresh_token);
      const authToken = jwtSignIn({ user: payload.user });
      return response.status(200).json({
        access_token: authToken.accessToken,
      });
    } catch (error) {
      console.error(error.message);
      return response.send(403).json({
        message: "AccessToken Wrong or Expire",
      });
    }
  }
}

module.exports = AuthController;
