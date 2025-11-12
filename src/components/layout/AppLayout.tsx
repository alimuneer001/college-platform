import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import type { Role } from '../../context/AuthContext'

type NavLinkItem = {
	to: string
	label: string
	roles?: Role[]
}

const NAV_LINKS: NavLinkItem[] = [
	{ to: '/dashboard', label: 'Dashboard' },
	{ to: '/courses', label: 'Courses' },
	{ to: '/attendance', label: 'Attendance' },
	{ to: '/marks', label: 'Marks', roles: ['student', 'admin'] },
]

export function AppLayout() {
	const { user, logout } = useAuth()
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<div className="min-h-screen bg-slate-50 md:grid md:grid-cols-[240px_1fr]">
			<aside
				className={[
					'fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-md transition-transform md:static md:translate-x-0 md:shadow-none',
					mobileOpen ? 'translate-x-0' : '-translate-x-full',
				].join(' ')}
			>
				<div className="flex h-14 items-center justify-between border-b px-4">
					<Link to="/dashboard" className="inline-flex items-center gap-2">
						<div className="size-8 rounded bg-indigo-600" />
						<span className="font-semibold text-slate-900">CampusPro</span>
					</Link>
					<button
						type="button"
						className="inline-flex size-8 items-center justify-center rounded md:hidden text-slate-500 hover:bg-slate-100"
						onClick={() => setMobileOpen(false)}
					>
						✕
					</button>
				</div>
				<nav className="flex-1 p-3 text-sm overflow-y-auto">
					{NAV_LINKS.filter((item) => !item.roles || (user && item.roles.includes(user.role))).map((item) => (
						<NavItem key={item.to} to={item.to} label={item.label} onNavigate={() => setMobileOpen(false)} />
					))}
					{user?.role === 'admin' ? (
						<NavItem to="/admin" label="Admin Console" onNavigate={() => setMobileOpen(false)} />
					) : null}
				</nav>
				<div className="p-4 border-t text-xs text-slate-500">
					<div>Logged in as</div>
					<div className="font-medium text-slate-700">{user?.name}</div>
					<div className="mt-3">© {new Date().getFullYear()} CampusPro</div>
				</div>
			</aside>
			<div className="md:col-start-2 flex min-h-screen flex-col">
				<header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-white px-4 md:px-6">
					<button
						type="button"
						className="inline-flex size-9 items-center justify-center rounded md:hidden bg-indigo-600 text-white"
						onClick={() => setMobileOpen((prev) => !prev)}
					>
						☰
					</button>
					<div className="hidden md:flex items-center text-sm text-slate-500 gap-2">
						<span>Welcome back,</span>
						<span className="font-medium text-slate-900">{user?.name ?? 'Guest'}</span>
						<span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs uppercase tracking-wide">{user?.role}</span>
					</div>
					<button
						type="button"
						onClick={logout}
						className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
					>
						Log out
					</button>
				</header>
				<main className="flex-1 p-4 md:p-6">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

function NavItem({ to, label, onNavigate }: { to: string; label: string; onNavigate?: () => void }) {
	return (
		<NavLink
			to={to}
			onClick={onNavigate}
			className={({ isActive }) =>
				[
					'flex items-center gap-2 rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100',
					isActive ? 'bg-slate-100 font-medium text-slate-900' : '',
				].join(' ')
			}
		>
			<span className="size-2 rounded-full bg-indigo-600" />
			{label}
		</NavLink>
	)
}


