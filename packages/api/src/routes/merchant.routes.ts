import { FastifyInstance } from 'fastify'

export async function merchantRoutes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return { status: 'merchant routes placeholder' }
  })
}
