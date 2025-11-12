import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Role = 'student' | 'faculty' | 'admin'

export type User = {
	id: string
	name: string
	email: string
	role: Role
}

type AuthContextValue = {
	user: User | null
	error: string | null
	login: (email: string, password: string) => Promise<void>
	logout: () => void
	clearError: () => void
}

const MOCK_USERS = [
	{
		id: 'stu-1',
		name: 'Ayesha Khan',
		email: 'student@campuspro.edu',
		password: 'student123',
		role: 'student' as const,
	},
	{
		id: 'fac-1',
		name: 'Dr. Omar Farooq',
		email: 'faculty@campuspro.edu',
		password: 'faculty123',
		role: 'faculty' as const,
	},
	{
		id: 'adm-1',
		name: 'Nadia Rehman',
		email: 'admin@campuspro.edu',
		password: 'admin123',
		role: 'admin' as const,
	},
]

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [error, setError] = useState<string | null>(null)

	const value = useMemo<AuthContextValue>(() => {
		async function login(email: string, password: string) {
			setError(null)
			const result = await new Promise<User | null>((resolve) => {
				setTimeout(() => {
					const found = MOCK_USERS.find(
						(u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
					)
					resolve(
						found
							? {
									id: found.id,
									name: found.name,
									email: found.email,
									role: found.role,
							  }
							: null,
					)
				}, 500)
			})

			if (!result) {
				setError('Invalid email or password')
				throw new Error('Invalid credentials')
			}
			setUser(result)
		}

		function logout() {
			setUser(null)
		}

		function clearError() {
			setError(null)
		}

		return {
			user,
			error,
			login,
			logout,
			clearError,
		}
	}, [user, error])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const ctx = useContext(AuthContext)
	if (!ctx) {
		throw new Error('useAuth must be used within AuthProvider')
	}
	return ctx
}

