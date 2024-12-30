'use client'

import type { FC } from 'react'

import { useTimer } from '@/store'

import { TimerChangeItem } from '@/components/shared'
import { Button } from '@/components/ui'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const TimerChangeItemList: FC<Props> = ({ className }) => {
	const timer = useTimer()

	return (
		<div className={cn(className)}>
			<TimerChangeItem
				title='focus'
				keyName='timeFocusValue'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={timer.timeFocusValue}
				tableValue={timer.timeFocusValue}
				changeTimerSliderHandler={timer.changeTimerSliderHandler}
			/>
			<TimerChangeItem
				keyName='timeShortBreakValue'
				title='short break'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={timer.timeShortBreakValue}
				tableValue={timer.timeShortBreakValue}
				changeTimerSliderHandler={timer.changeTimerSliderHandler}
			/>
			<TimerChangeItem
				keyName='timeLongBreakValue'
				title='long break'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={timer.timeLongBreakValue}
				tableValue={timer.timeLongBreakValue}
				changeTimerSliderHandler={timer.changeTimerSliderHandler}
			/>
			<TimerChangeItem
				keyName='timeRoundsValue'
				title='rounds'
				className='pt-5'
				min={1}
				max={12}
				defaultValue={timer.timeRoundsValue}
				tableValue={timer.timeRoundsValue}
				changeTimerSliderHandler={timer.changeTimerSliderHandler}
			/>
			<div className='my-5 text-center'>
				<Button>Reset Default</Button>
			</div>
		</div>
	)
}
