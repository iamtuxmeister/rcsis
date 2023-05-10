import { PrismaClient } from '@prisma/client';

const prisma = App.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	App.prisma = prisma;
}

export { prisma };
