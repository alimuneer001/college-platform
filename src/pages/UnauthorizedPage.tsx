import { Link } from 'react-router-dom'

export function UnauthorizedPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
			<div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8 max-w-md w-full text-center space-y-4">
				<div className="size-14 rounded-full mx-auto bg-amber-100 flex items-center justify-center text-3xl">
					⚠️
				</div>
				<h1 className="text-xl font-semibold text-slate-900">Access Restricted</h1>
				<p className="text-sm text-slate-600">
					You don't have permission to view this page. If you believe this is a mistake, please contact your
					administrator.
				</p>
				<div className="flex flex-col sm:flex-row gap-2 justify-center">
					<Link
						to="/dashboard"
						className="inline-flex justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
					>
						Back to dashboard
					</Link>
					<Link
						to="/login"
						className="inline-flex justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
					>
						Switch account
					</Link>
				</div>
			</div>
		</div>
	)
}

