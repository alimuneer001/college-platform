import { Card, CardBody, CardHeader } from '../components/ui/Card'

const alerts = [
	{ title: 'Attendance dip detected', detail: 'CS201 attendance dropped below 80%', action: 'Review attendance policy' },
	{ title: 'Pending grade approvals', detail: '5 assessments awaiting validation', action: 'Notify faculty advisors' },
]

const stats = [
	{ label: 'Active students', value: '1,240', change: '+45 vs last term' },
	{ label: 'Faculty members', value: '86', change: '+3 onboarded' },
	{ label: 'Courses running', value: '128', change: 'Stable' },
	{ label: 'Avg. satisfaction', value: '4.3/5', change: '+0.2 YoY' },
]

export function AdminPage() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-xl md:text-2xl font-bold tracking-tight">Administrator Console</h1>
				<p className="mt-1 text-sm text-slate-600">High-level overview of academic operations</p>
			</div>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{stats.map((item) => (
					<Card key={item.label}>
						<CardBody>
							<p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
							<p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
							<p className="mt-1 text-xs text-emerald-600">{item.change}</p>
						</CardBody>
					</Card>
				))}
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<Card>
					<CardHeader title="Operational alerts" subtitle="Action required" />
					<CardBody>
						<ul className="space-y-4">
							{alerts.map((alert) => (
								<li key={alert.title} className="rounded border border-slate-200 p-3">
									<div className="text-sm font-medium text-slate-900">{alert.title}</div>
									<div className="mt-1 text-sm text-slate-600">{alert.detail}</div>
									<div className="mt-2 text-xs font-medium text-indigo-600">{alert.action}</div>
								</li>
							))}
						</ul>
					</CardBody>
				</Card>
				<Card>
					<CardHeader title="Resource utilization" subtitle="Current term" />
					<CardBody>
						<div className="space-y-4">
							<ResourceRow label="Classroom occupancy" value={78} />
							<ResourceRow label="Laboratory usage" value={64} />
							<ResourceRow label="Library checkouts" value={52} />
							<ResourceRow label="Counselling sessions" value={34} />
						</div>
					</CardBody>
				</Card>
			</section>
		</div>
	)
}

function ResourceRow({ label, value }: { label: string; value: number }) {
	return (
		<div>
			<div className="flex items-center justify-between text-sm">
				<span className="font-medium text-slate-800">{label}</span>
				<span className="text-xs text-slate-500">{value}%</span>
			</div>
			<div className="mt-2 h-2 rounded bg-slate-200">
				<div className="h-2 rounded bg-emerald-500" style={{ width: `${value}%` }} />
			</div>
		</div>
	)
}

