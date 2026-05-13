import { PrismaClient } from '../src/generated/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Database schema is ready. Seeding is now handled dynamically per-user via the application.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
