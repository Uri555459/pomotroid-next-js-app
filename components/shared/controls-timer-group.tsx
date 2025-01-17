'use client'

import { Timer } from '@prisma/client'
import { Pause, Play, SkipForward, Volume2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { useTimer } from '@/store'

import { Skeleton } from '@/components/ui'

import { cn } from '@/lib/utils'

import { ROUTE_API_CONSTANTS } from '@/constants/route.constants'

import { KeyNameType } from '@/@types'

import { Button } from '../ui'

import { axiosInstance } from '@/axios'

interface Props {
	className?: string
}

export const ControlsTimerGroup: FC<Props> = ({ className }) => {
	const timer = useTimer(state => state)

	const [data, setData] = useState<Timer>({} as Timer)

	const handleReset = () => {
		if (timer.isPlay) timer.changeIsPlay()
		timer.changeIsReset()
	}

	const changeTimerSliderHandler = async (
		keyName: KeyNameType,
		value: number | boolean,
	) => {
		const { data } = await axiosInstance.put<Timer>(ROUTE_API_CONSTANTS.timer, {
			[keyName]: value,
		})

		setData(data)
	}

	useEffect(() => {
		axiosInstance<Timer[]>(ROUTE_API_CONSTANTS.timer).then(({ data }) => {
			setData(data[0])
		})
	}, [data.isPlay, data.isReset])

	return (
		<div className={cn(className)}>
			<div className='flex items-center justify-center'>
				<Button
					className='border-gray flex h-14 w-14 items-center rounded-full border-2 p-0'
					onClick={() => changeTimerSliderHandler('isPlay', !data.isPlay)}
				>
					{!data.isPlay ? (
						<Play size={20} />
					) : data.timeRoundsCurrentValue === data.timeRoundsValue ? (
						<Play size={20} />
					) : (
						<Pause size={20} />
					)}
				</Button>
			</div>
			<div className='flex items-center justify-between pt-14'>
				<div>
					<div>
						{!data.timeFocusValue ? (
							<Skeleton className='h-5 w-10 bg-primary' />
						) : (
							`${data.timeRoundsCurrentValue}/${data.timeRoundsValue}`
						)}
					</div>
					<Button onClick={handleReset}>Reset</Button>
				</div>

				<div className='flex items-center'>
					<Button>
						<SkipForward size={20} />
					</Button>
					<Button>
						<Volume2 size={20} />
					</Button>
				</div>
			</div>
		</div>
	)
}
