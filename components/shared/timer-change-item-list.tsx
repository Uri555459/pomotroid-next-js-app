import type { Timer } from '@prisma/client'
import type { FC } from 'react'

import { TimerChangeItem } from '@/components/shared'
import { Button } from '@/components/ui'

import { cn } from '@/lib/utils'

import { ROUTE_API_CONSTANTS } from '@/constants/route.constants'

import { axiosInstance } from '@/axios'

interface Props {
	className?: string
}

export const TimerChangeItemList: FC<Props> = async ({ className }) => {
	const { data } = await axiosInstance<Timer[]>(ROUTE_API_CONSTANTS.timer)

	const baseConfig = data[0]

	return (
		<div className={cn(className)}>
			<TimerChangeItem
				title='focus'
				keyName='timeFocusValue'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={baseConfig.timeFocusValue}
				tableValue={baseConfig.timeFocusValue}
				// changeTimerSliderHandler={changeTimerSliderHandler}
			/>
			<TimerChangeItem
				keyName='timeShortBreakValue'
				title='short break'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={baseConfig.timeShortBreakValue}
				tableValue={baseConfig.timeShortBreakValue}
				// changeTimerSliderHandler={changeTimerSliderHandler}
			/>
			<TimerChangeItem
				keyName='timeLongBreakValue'
				title='long break'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={baseConfig.timeLongBreakValue}
				tableValue={baseConfig.timeLongBreakValue}
				// changeTimerSliderHandler={changeTimerSliderHandler}
			/>
			<TimerChangeItem
				keyName='timeRoundsValue'
				title='rounds'
				className='pt-5'
				min={1}
				max={12}
				defaultValue={baseConfig.timeRoundsValue}
				tableValue={baseConfig.timeRoundsValue}
				// changeTimerSliderHandler={changeTimerSliderHandler}
			/>
			<div className='my-5 text-center'>
				<Button>Reset Default</Button>
			</div>
		</div>
	)
}
