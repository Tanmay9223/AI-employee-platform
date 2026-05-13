'use client'
import { createContext, useContext } from 'react'

type Session = {
  userId: string;
  merchantId: string;
  merchantName?: string;
} | null

const SessionContext = createContext<Session>(null)

export function SessionProvider({ children, session }: { children: React.ReactNode, session: Session }) {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  return useContext(SessionContext)
}
