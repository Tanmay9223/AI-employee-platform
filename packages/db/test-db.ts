import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const orders = await prisma.unifiedOrder.findMany({
    where: {
      orderedAt: {
        gte: new Date('2026-04-20'),
        lte: new Date('2026-04-22')
      }
    },
    select: {
      id: true,
      merchantId: true,
      status: true,
      orderedAt: true
    }
  });
  console.log('Found orders:', orders.length);
  console.log(JSON.stringify(orders, null, 2));
}
main().catch(console.error);
