import type { Timer } from '@prisma/client'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { prisma } from '@/prisma'

export const revalidate = 60

export async function GET(): Promise<NextResponse> {
	const baseConfig = await prisma.timer.findMany()

	return NextResponse.json(baseConfig)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
	const data = await req.json()
	const configData = await prisma.timer.create({ data })

	return NextResponse.json(configData)
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
	const data: Timer = await req.json()
	const dataKeyName = Object.keys(data)[0]

	const configData = await prisma.timer.update({
		where: { id: 1 },
		data,
	})

	console.log(dataKeyName)

	return NextResponse.json(configData)
}
