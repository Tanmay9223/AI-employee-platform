import path from 'path'
import { config } from 'dotenv'
// Load root .env (works whether running from packages/api or from repo root)
config({ path: path.resolve(__dirname, '../../../.env') })

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { merchantRoutes } from './routes/merchant.routes'
import { dataRoutes } from './routes/data.routes'
import { chatRoutes } from './routes/chat.routes'
import { agentRoutes } from './routes/agent.routes'
import { internalRoutes } from './routes/internal.routes'
import { mockRoutes } from './routes/mock.routes'

const server = Fastify({ logger: true })

// Setup plugin registration
async function build() {
  await server.register(cors, { origin: true })
  await server.register(merchantRoutes, { prefix: '/api/merchants' })
  await server.register(dataRoutes, { prefix: '/api/data' })
  await server.register(chatRoutes, { prefix: '/api/chat' })
  await server.register(agentRoutes, { prefix: '/api/agent' })
  await server.register(internalRoutes, { prefix: '/api/internal' })
  await server.register(mockRoutes, { prefix: '/api/mock' })

  server.get('/health', async () => ({ status: 'ok', timestamp: new Date() }))
}

build().then(async () => {
  await server.listen({ port: Number(process.env.API_PORT || 3001), host: '0.0.0.0' })
  console.log('API running on port 3001')
}).catch(console.error)
