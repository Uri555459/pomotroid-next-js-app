'use client'

import type { FC } from 'react'

import { Slider } from '@/components/ui'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
	defaultValue?: number
	min?: number
	max?: number
	step?: number
	title?: string
	keyName: KeyNameType
	tableValue: number
	onChange?: (value: number) => void
	changeTimerSliderHandler: (key: string, value: number) => void
}

type KeyNameType =
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
	tableValue = 1,
	changeTimerSliderHandler,
}) => {
	return (
		<div className={cn(className)}>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='text-center text-sm capitalize text-[#cc9630]'>
					{title}
				</h2>
				<div className='mb-3'>{`${tableValue} : 00`}</div>
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
