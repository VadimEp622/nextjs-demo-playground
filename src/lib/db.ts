// ********************************************************************************************************************

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

// INFO: 
// 1) "npx prisma generate" -> Regenerate your Prisma Schema. need to update it every time your Prisma schema file is changing by running the command.
// 2) "npx prisma db push" -> Create the tables in your database based on your Prisma schema.
// 3) "npx prisma studio" -> Open Prisma Studio, a GUI for modifying your database.

// ********************************************************************************************************************

// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export default prisma;

// ********************************************************************************************************************

// import postgres from "postgres";

// const sql = postgres(process.env.DATABASE_URL!);

// export default sql;

// ********************************************************************************************************************

// import { PrismaClient } from '@prisma/client'

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const prisma =
//   globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// ********************************************************************************************************************
