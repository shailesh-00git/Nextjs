import { PrismaClient } from "../app/generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = global;

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

// ✅ reuses existing client instead of creating a new one every time
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
