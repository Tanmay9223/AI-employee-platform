export const logger = {
  info: (message: string, meta?: Record<string, unknown>) => {
    console.info(JSON.stringify({ level: 'info', message, timestamp: new Date().toISOString(), ...meta }))
  },
  warn: (message: string, meta?: Record<string, unknown>) => {
    console.warn(JSON.stringify({ level: 'warn', message, timestamp: new Date().toISOString(), ...meta }))
  },
  error: (message: string, error?: unknown, meta?: Record<string, unknown>) => {
    console.error(JSON.stringify({
      level: 'error',
      message,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? { message: error.message, stack: error.stack } : error,
      ...meta
    }))
  },
  debug: (message: string, meta?: Record<string, unknown>) => {
    console.debug(JSON.stringify({ level: 'debug', message, timestamp: new Date().toISOString(), ...meta }))
  }
}
