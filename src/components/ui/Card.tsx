import type { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
	return <div className="rounded-lg border border-slate-200 bg-white">{children}</div>
}

export function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
	return (
		<div className="p-4 border-b">
			<div className="text-sm text-slate-500">{subtitle}</div>
			<h3 className="text-base md:text-lg font-semibold text-slate-900">{title}</h3>
		</div>
	)
}

export function CardBody({ children }: { children: ReactNode }) {
	return <div className="p-4">{children}</div>
}


