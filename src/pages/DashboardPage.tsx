import { Card, CardBody, CardHeader } from '../components/ui/Card'

export function DashboardPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-xl md:text-2xl font-bold tracking-tight">Dashboard</h1>
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Stat title="Courses" value="6" delta="+1 this term" />
				<Stat title="Attendance" value="92%" delta="+2% this month" />
				<Stat title="Average Grade" value="B+" delta="Stable" />
				<Stat title="Credits" value="18/21" delta="On track" />
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Card>
					<CardHeader title="Upcoming Classes" subtitle="Next 7 days" />
					<CardBody>
						<ul className="space-y-3 text-sm">
							<li className="flex items-center justify-between">
								<span className="font-medium text-slate-800">Data Structures</span>
								<span className="text-slate-500">Mon 10:00</span>
							</li>
							<li className="flex items-center justify-between">
								<span className="font-medium text-slate-800">Operating Systems</span>
								<span className="text-slate-500">Tue 12:00</span>
							</li>
							<li className="flex items-center justify-between">
								<span className="font-medium text-slate-800">Discrete Math</span>
								<span className="text-slate-500">Wed 09:00</span>
							</li>
						</ul>
					</CardBody>
				</Card>
				<Card>
					<CardHeader title="Recent Attendance" subtitle="Last 5 sessions" />
					<CardBody>
						<div className="flex gap-2">
							{[1, 1, 0, 1, 1].map((present, i) => (
								<div
									key={i}
									className={[
										'h-10 flex-1 rounded',
										present ? 'bg-green-500/80' : 'bg-red-500/70',
									].join(' ')}
								/>
							))}
						</div>
						<p className="mt-3 text-sm text-slate-600">4 present, 1 absent</p>
					</CardBody>
				</Card>
				<Card>
					<CardHeader title="Grade Breakdown" subtitle="This term" />
					<CardBody>
						<div className="space-y-2">
							<GradeBar course="DSA" score={85} />
							<GradeBar course="OS" score={78} />
							<GradeBar course="DBMS" score={88} />
							<GradeBar course="Math" score={91} />
						</div>
					</CardBody>
				</Card>
			</section>
		</div>
	)
}

function Stat({ title, value, delta }: { title: string; value: string; delta: string }) {
	return (
		<Card>
			<CardBody>
				<div className="text-sm text-slate-500">{title}</div>
				<div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
				<div className="mt-1 text-xs text-slate-500">{delta}</div>
			</CardBody>
		</Card>
	)
}

function GradeBar({ course, score }: { course: string; score: number }) {
	return (
		<div>
			<div className="flex items-center justify-between text-sm">
				<span className="font-medium text-slate-800">{course}</span>
				<span className="text-slate-600">{score}%</span>
			</div>
			<div className="h-2 bg-slate-200 rounded mt-1">
				<div className="h-2 rounded bg-indigo-600" style={{ width: `${score}%` }} />
			</div>
		</div>
	)
}


