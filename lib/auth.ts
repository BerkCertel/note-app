import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { sendMail } from "./mail/mail";
import { verifyEmailHtml } from "@/components/emails/verify-email";
import { resetPasswordHtml } from "@/components/emails/reset-password-email";
import { lastLoginMethod } from "better-auth/plugins";

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const html = verifyEmailHtml({ user, url });
      await sendMail({
        to: user.email,
        subject: "Verify your email address",
        html,
      });
    },
    sendOnSignUp: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      const html = resetPasswordHtml({ user, url });
      try {
        await sendMail({
          to: user.email,
          subject: "Reset your password",
          html,
        });
      } catch (err) {
        console.error("EMAIL SEND ERROR:", err);
        throw err; // veya uygun bir hata döndür
      }
    },
    requireEmailVerification: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema,
  }),

  plugins: [lastLoginMethod(), nextCookies()], // make sure this is the last plugin in the array
});
