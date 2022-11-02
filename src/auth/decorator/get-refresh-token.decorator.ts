import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const AuthRefreshToken = createParamDecorator(
    (_: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      let data = request?.cookies["auth-cookie"];
      return data ? data.refreshToken : null;
    },
  );