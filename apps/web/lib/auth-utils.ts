import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto'

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hashed = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hashed}`
}

export function verifyPassword(password: string, stored: string): boolean {
  try {
    const [salt, hashed] = stored.split(':')
    if (!salt || !hashed) return false
    
    const hashedInput = scryptSync(password, salt, 64).toString('hex')
    return timingSafeEqual(Buffer.from(hashed), Buffer.from(hashedInput))
  } catch (e) {
    return false
  }
}
