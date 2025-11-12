import { Card, CardBody, CardHeader } from '../components/ui/Card'

const records = [
	{ date: '2025-10-01', course: 'Data Structures', status: 'Present' },
	{ date: '2025-10-03', course: 'Operating Systems', status: 'Present' },
	{ date: '2025-10-05', course: 'DBMS', status: 'Absent' },
	{ date: '2025-10-07', course: 'Discrete Math', status: 'Present' },
	{ date: '2025-10-09', course: 'Data Structures', status: 'Present' },
]

export function AttendancePage() {
	const presentCount = records.filter((r) => r.status === 'Present').length
	const attendancePct = Math.round((presentCount / records.length) * 100)

	return (
		<div className="space-y-6">
			<h1 className="text-xl md:text-2xl font-bold tracking-tight">Attendance</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Card>
					<CardHeader title="Overview" subtitle="Quick summary" />
					<CardBody>
						<div className="text-sm text-slate-600">Attendance rate</div>
						<div className="mt-1 text-3xl font-semibold">{attendancePct}%</div>
						<div className="mt-3 h-2 bg-slate-200 rounded">
							<div className="h-2 rounded bg-green-600" style={{ width: `${attendancePct}%` }} />
						</div>
						<p className="mt-2 text-xs text-slate-500">
							{presentCount} present, {records.length - presentCount} absent
						</p>
					</CardBody>
				</Card>
				<div className="lg:col-span-2">
					<Card>
						<CardHeader title="Session History" subtitle="Recent sessions" />
						<CardBody>
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead>
										<tr className="text-left text-slate-500 border-b">
											<th className="py-2 pr-4">Date</th>
											<th className="py-2 pr-4">Course</th>
											<th className="py-2">Status</th>
										</tr>
									</thead>
									<tbody>
										{records.map((r, i) => (
											<tr key={i} className="border-b last:border-0">
												<td className="py-3 pr-4 font-medium text-slate-800">{r.date}</td>
												<td className="py-3 pr-4">{r.course}</td>
												<td className="py-3">
													<span
														className={[
															'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
															r.status === 'Present'
																? 'bg-green-100 text-green-700'
																: 'bg-red-100 text-red-700',
														].join(' ')}
													>
														{r.status}
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}


