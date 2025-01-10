'use client'

import type { Timer } from '@prisma/client'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { Slider } from '@/components/ui'

import { cn } from '@/lib/utils'

import { ROUTE_API_CONSTANTS } from '@/constants/route.constants'

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

export type KeyNameType =
	| 'timeFocusValue'
	| 'timeShortBreakValue'
	| 'timeLongBreakValue'
	| 'timeRoundsValue'
	| 'timeRoundsCurrentValue'

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
		value: number,
	) => {
		const { data } = await axiosInstance.put<Timer>(ROUTE_API_CONSTANTS.timer, {
			[keyName]: value,
		})

		// if (typeof keyName !== 'string') return null

		// const str = data[keyName]
		// console.log(str)

		setDisplayName(String(data[keyName]))
		// console.log(data[keyName as keyof Timer])

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
