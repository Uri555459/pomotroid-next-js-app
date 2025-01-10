import { NextRequest, NextResponse } from 'next/server'

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
