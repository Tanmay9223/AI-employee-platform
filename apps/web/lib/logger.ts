export const logger = {
  info: (message: string, context?: unknown) => {
    console.log(JSON.stringify({ level: 'info', timestamp: new Date().toISOString(), message, context }));
  },
  warn: (message: string, context?: unknown) => {
    console.warn(JSON.stringify({ level: 'warn', timestamp: new Date().toISOString(), message, context }));
  },
  error: (message: string, error?: unknown) => {
    const errorDetails = error instanceof Error
      ? { message: error.message, stack: error.stack }
      : error;
    console.error(JSON.stringify({ level: 'error', timestamp: new Date().toISOString(), message, error: errorDetails }));
  }
};
