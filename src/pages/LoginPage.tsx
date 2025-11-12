import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function LoginPage() {
	const { login, error, clearError } = useAuth()
	const [email, setEmail] = useState('student@campuspro.edu')
	const [password, setPassword] = useState('student123')
	const [submitting, setSubmitting] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setSubmitting(true)
		try {
			await login(email, password)
			const redirectTo = (location.state as { from?: Location })?.from?.pathname ?? '/dashboard'
			navigate(redirectTo, { replace: true })
		} catch (err) {
			// handled via context error
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
			<div className="w-full max-w-md">
				<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
					<div className="text-center space-y-2">
						<div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-xl">
							<div className="size-9 rounded-lg bg-indigo-600/10 flex items-center justify-center text-lg">
								CP
							</div>
							CampusPro Portal
						</div>
						<p className="text-sm text-slate-600">
							Sign in with your institutional credentials to continue
						</p>
					</div>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<label className="block text-sm font-medium text-slate-700">
							<span>Email</span>
							<input
								type="email"
								className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
								value={email}
								onChange={(event) => {
									if (error) clearError()
									setEmail(event.target.value)
								}}
								required
							/>
						</label>
						<label className="block text-sm font-medium text-slate-700">
							<span>Password</span>
							<input
								type="password"
								className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
								value={password}
								onChange={(event) => {
									if (error) clearError()
									setPassword(event.target.value)
								}}
								required
							/>
						</label>
						{error ? (
							<div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
								{error}
							</div>
						) : (
							<div className="text-xs text-slate-500">
								Try:
								<ul className="mt-1 space-y-1">
									<li>student@campuspro.edu / student123</li>
									<li>faculty@campuspro.edu / faculty123</li>
									<li>admin@campuspro.edu / admin123</li>
								</ul>
							</div>
						)}
						<button
							type="submit"
							className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition disabled:opacity-50"
							disabled={submitting}
						>
							{submitting ? 'Signing in…' : 'Sign in'}
						</button>
					</form>
				</div>
				<p className="mt-4 text-center text-xs text-slate-500">
					Need help?{' '}
					<a href="mailto:support@campuspro.edu" className="text-indigo-600 hover:underline">
						Contact IT support
					</a>
				</p>
			</div>
		</div>
	)
}

