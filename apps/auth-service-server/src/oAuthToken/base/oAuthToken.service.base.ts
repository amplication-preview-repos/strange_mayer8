/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  OAuthToken as PrismaOAuthToken,
  User as PrismaUser,
} from "@prisma/client";

export class OAuthTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OAuthTokenCountArgs, "select">
  ): Promise<number> {
    return this.prisma.oAuthToken.count(args);
  }

  async oAuthTokens(
    args: Prisma.OAuthTokenFindManyArgs
  ): Promise<PrismaOAuthToken[]> {
    return this.prisma.oAuthToken.findMany(args);
  }
  async oAuthToken(
    args: Prisma.OAuthTokenFindUniqueArgs
  ): Promise<PrismaOAuthToken | null> {
    return this.prisma.oAuthToken.findUnique(args);
  }
  async createOAuthToken(
    args: Prisma.OAuthTokenCreateArgs
  ): Promise<PrismaOAuthToken> {
    return this.prisma.oAuthToken.create(args);
  }
  async updateOAuthToken(
    args: Prisma.OAuthTokenUpdateArgs
  ): Promise<PrismaOAuthToken> {
    return this.prisma.oAuthToken.update(args);
  }
  async deleteOAuthToken(
    args: Prisma.OAuthTokenDeleteArgs
  ): Promise<PrismaOAuthToken> {
    return this.prisma.oAuthToken.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.oAuthToken
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
