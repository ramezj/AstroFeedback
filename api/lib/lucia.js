// lucia.ts
import { lucia } from "lucia";
import { express } from "lucia/middleware";
import  prisma  from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import "lucia-auth/polyfill/node";

// expect error
export const auth = lucia({
	env: "DEV", // "PROD" if deployed to HTTPS
	middleware: express(),
    adapter: prisma(new PrismaClient()),
    transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			username: userData.username
		};
	}
});

