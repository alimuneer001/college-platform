import { Card, CardBody, CardHeader } from '../components/ui/Card'

const courses = [
	{ code: 'CS201', name: 'Data Structures', faculty: 'Dr. Ahmed', credits: 3, schedule: 'Mon/Wed 10:00' },
	{ code: 'CS203', name: 'Operating Systems', faculty: 'Ms. Fatima', credits: 4, schedule: 'Tue/Thu 12:00' },
	{ code: 'CS205', name: 'DBMS', faculty: 'Dr. Khan', credits: 3, schedule: 'Mon/Wed 13:00' },
	{ code: 'MA207', name: 'Discrete Math', faculty: 'Dr. Ali', credits: 3, schedule: 'Fri 09:00' },
]

export function CoursesPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-xl md:text-2xl font-bold tracking-tight">Courses</h1>
			<Card>
				<CardHeader title="Enrolled Courses" subtitle="Current term" />
				<CardBody>
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="text-left text-slate-500 border-b">
									<th className="py-2 pr-4">Code</th>
									<th className="py-2 pr-4">Course</th>
									<th className="py-2 pr-4">Faculty</th>
									<th className="py-2 pr-4">Credits</th>
									<th className="py-2">Schedule</th>
								</tr>
							</thead>
							<tbody>
								{courses.map((c) => (
									<tr key={c.code} className="border-b last:border-0">
										<td className="py-3 pr-4 font-medium text-slate-800">{c.code}</td>
										<td className="py-3 pr-4">{c.name}</td>
										<td className="py-3 pr-4">{c.faculty}</td>
										<td className="py-3 pr-4">{c.credits}</td>
										<td className="py-3">{c.schedule}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</CardBody>
			</Card>
		</div>
	)
}


