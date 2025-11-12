import { Card, CardBody, CardHeader } from '../components/ui/Card'

const marks = [
	{ course: 'Data Structures', assessments: [{ name: 'Quiz 1', score: 18, total: 20 }, { name: 'Midterm', score: 42, total: 50 }] },
	{ course: 'Operating Systems', assessments: [{ name: 'Quiz 1', score: 15, total: 20 }, { name: 'Midterm', score: 37, total: 50 }] },
	{ course: 'DBMS', assessments: [{ name: 'Quiz 1', score: 19, total: 20 }, { name: 'Midterm', score: 44, total: 50 }] },
]

function toPct(score: number, total: number) {
	return Math.round((score / total) * 100)
}

export function MarksPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-xl md:text-2xl font-bold tracking-tight">Marks</h1>
			<Card>
				<CardHeader title="Assessments" subtitle="Per course" />
				<CardBody>
					<div className="space-y-6">
						{marks.map((m) => {
							const totalScored = m.assessments.reduce((s, a) => s + a.score, 0)
							const totalPossible = m.assessments.reduce((s, a) => s + a.total, 0)
							const pct = toPct(totalScored, totalPossible)
							return (
								<div key={m.course} className="rounded border border-slate-200">
									<div className="flex items-center justify-between p-3">
										<div>
											<div className="text-sm text-slate-500">Course</div>
											<div className="text-base font-medium text-slate-900">{m.course}</div>
										</div>
										<div className="w-40">
											<div className="h-2 bg-slate-200 rounded">
												<div className="h-2 rounded bg-indigo-600" style={{ width: `${pct}%` }} />
											</div>
											<div className="mt-1 text-xs text-slate-600 text-right">{pct}%</div>
										</div>
									</div>
									<div className="border-t">
										<table className="w-full text-sm">
											<thead>
												<tr className="text-left text-slate-500">
													<th className="py-2 pl-3 pr-4">Assessment</th>
													<th className="py-2 pr-4">Score</th>
													<th className="py-2 pr-3">Out of</th>
												</tr>
											</thead>
											<tbody>
												{m.assessments.map((a) => (
													<tr key={a.name} className="border-t">
														<td className="py-2 pl-3 pr-4">{a.name}</td>
														<td className="py-2 pr-4 font-medium text-slate-800">{a.score}</td>
														<td className="py-2 pr-3 text-slate-600">{a.total}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							)
						})}
					</div>
				</CardBody>
			</Card>
		</div>
	)
}


