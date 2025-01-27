'use client'

import type { Timer } from '@prisma/client'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { Slider } from '@/components/ui'

import { cn } from '@/lib/utils'

import { ROUTE_API_CONSTANTS } from '@/constants/route.constants'

import type { KeyNameType } from '@/@types'

import { axiosInstance } from '@/axios'

interface Props {
	className?: string
	defaultValue?: number
	min?: number
	max?: number
	step?: number
	title?: string
	keyName: KeyNameType
	tableValue: number
}

export const TimerChangeItem: FC<Props> = ({
	className,
	defaultValue = 1,
	min = 0,
	max = 1000,
	step = 1,
	title,
	keyName,
}) => {
	const [displayName, setDisplayName] = useState('')

	const changeTimerSliderHandler = async (
		keyName: KeyNameType,
		value: number | boolean,
	) => {
		const { data } = await axiosInstance.put<Timer>(ROUTE_API_CONSTANTS.timer, {
			[keyName]: value,
		})

		setDisplayName(data[keyName].toString())

		return data
	}

	useEffect(() => {
		changeTimerSliderHandler(keyName, defaultValue)
	}, [defaultValue, keyName])

	return (
		<div className={cn(className)}>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='text-center text-sm capitalize text-[#cc9630]'>
					{title}
				</h2>
				<div className='mb-3'>{`${displayName} : 00`}</div>
				<Slider
					defaultValue={[defaultValue]}
					min={min}
					max={max}
					step={step}
					onValueChange={(value: number[]) =>
						changeTimerSliderHandler(keyName, value[0])
					}
				/>
			</div>
		</div>
	)
}
