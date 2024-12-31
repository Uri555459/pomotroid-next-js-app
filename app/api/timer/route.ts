import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma'

export const revalidate = 60

export const GET = async () => {
	const baseConfig = await prisma.timer.findMany()

	return NextResponse.json(baseConfig)
}

export const POST = async (req: NextRequest) => {
	const data = await req.json()
	const configData = await prisma.timer.create({ data })

	return NextResponse.json(configData)
}
