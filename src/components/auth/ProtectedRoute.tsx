import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import type { Role } from '../../context/AuthContext'

type ProtectedRouteProps = {
	roles?: Role[]
}

export function ProtectedRoute({ roles }: ProtectedRouteProps) {
	const { user } = useAuth()
	const location = useLocation()

	if (!user) {
		return <Navigate to="/login" replace state={{ from: location }} />
	}

	if (roles && !roles.includes(user.role)) {
		return <Navigate to="/unauthorized" replace />
	}

	return <Outlet />
}

