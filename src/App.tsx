import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { AppLayout } from './components/layout/AppLayout'
import { DashboardPage } from './pages/DashboardPage'
import { CoursesPage } from './pages/CoursesPage'
import { AttendancePage } from './pages/AttendancePage'
import { MarksPage } from './pages/MarksPage'
import { LoginPage } from './pages/LoginPage'
import { UnauthorizedPage } from './pages/UnauthorizedPage'
import { AdminPage } from './pages/AdminPage'

export default function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/unauthorized" element={<UnauthorizedPage />} />

			<Route element={<ProtectedRoute />}>
				<Route element={<AppLayout />}>
					<Route index element={<Navigate to="dashboard" replace />} />
					<Route path="dashboard" element={<DashboardPage />} />
					<Route path="courses" element={<CoursesPage />} />
					<Route path="attendance" element={<AttendancePage />} />
					<Route element={<ProtectedRoute roles={['student', 'admin']} />}>
						<Route path="marks" element={<MarksPage />} />
					</Route>
					<Route element={<ProtectedRoute roles={['admin']} />}>
						<Route path="admin" element={<AdminPage />} />
					</Route>
				</Route>
			</Route>

			<Route path="*" element={<Navigate to="/dashboard" replace />} />
		</Routes>
	)
}


