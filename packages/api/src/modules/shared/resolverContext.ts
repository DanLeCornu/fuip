import { PrismaClient } from "@fuip/database"

import { ExpressContext } from "../../lib/express"

export type ResolverContext = ExpressContext & { prisma: PrismaClient }
