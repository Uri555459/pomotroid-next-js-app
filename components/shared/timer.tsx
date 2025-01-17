'use client'

import { Timer as TimerType } from '@prisma/client'
import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useTimer } from '@/store'

import { Skeleton } from '@/components/ui'

import { cn } from '@/lib/utils'

import { ROUTE_API_CONSTANTS } from '@/constants/route.constants'

import type { KeyNameType } from '@/@types'

import { axiosInstance } from '@/axios'

interface Props {
	className?: string
}

export const Timer: FC<Props> = ({ className }) => {
	const [timerData, setTimerData] = useState<TimerType>({} as TimerType)
	const timer = useTimer(state => state)
	const [updateTime, setUpdateTime] = useState(
		timerData ? timerData.timeFocusValue : 0,
	)

	const audioRef = useRef<HTMLAudioElement>(null)

	const changeTimerSliderHandler = async (
		keyName: KeyNameType,
		value: number | boolean,
	) => {
		const { data } = await axiosInstance.put<TimerType>(
			ROUTE_API_CONSTANTS.timer,
			{
				[keyName]: value,
			},
		)

		setTimerData(data)
	}

	useEffect(() => {
		axiosInstance<TimerType[]>(ROUTE_API_CONSTANTS.timer).then(({ data }) => {
			setUpdateTime(data[0].timeFocusValue)
			setTimerData(data[0])
		})
	}, [timer.isPlay])

	const play = () => {
		if (audioRef.current) {
			audioRef.current.play()
		} else {
			// Throw error
		}
	}

	if (!timerData) return null

	return (
		<div className={cn('flex flex-col items-center', className)}>
			<CountdownCircleTimer
				key={String(Number(timerData.isPlay))}
				isGrowing={false}
				isPlaying={timerData.isPlay}
				size={220}
				strokeWidth={10}
				trailColor='#736e76'
				trailStrokeWidth={2}
				duration={updateTime * 60}
				colors={['#ed5c42', '#ed5c42', '#ed5c42', '#ed5c42']}
				colorsTime={[7, 5, 2, 0]}
				onComplete={() => {
					if (
						timerData.timeRoundsCurrentValue !== timerData.timeRoundsValue &&
						timerData.timeRoundsCurrentValue % 2 !== 0
					) {
						changeTimerSliderHandler(
							'timeRoundsCurrentValue',
							timerData.timeRoundsCurrentValue + 1,
						)
						play()

						setUpdateTime(timerData.timeShortBreakValue)
						changeTimerSliderHandler('isReset', !timerData.isReset)
						changeTimerSliderHandler('isPlay', !timerData.isPlay)
					} else if (
						timerData.timeRoundsCurrentValue !== timerData.timeRoundsValue
					) {
						changeTimerSliderHandler(
							'timeRoundsCurrentValue',
							timerData.timeRoundsCurrentValue + 1,
						)
						play()
						setUpdateTime(timerData.timeFocusValue)
						changeTimerSliderHandler('isReset', !timerData.isReset)
						changeTimerSliderHandler('isPlay', !timerData.isPlay)
					} else if (
						timerData.timeRoundsCurrentValue === timerData.timeRoundsValue
					) {
						play()
						setUpdateTime(timerData.timeLongBreakValue)
						changeTimerSliderHandler('isPlay', !timerData.isPlay)
					}
					changeTimerSliderHandler('isPlay', !timerData.isPlay)
				}}
				rotation='clockwise'
			>
				{({ remainingTime }) => {
					const minutes = Math.floor(remainingTime / 60)
					const seconds = remainingTime % 60

					return (
						<div className='flex flex-col items-center justify-center text-5xl font-light'>
							{!remainingTime ? (
								<Skeleton className='h-10 w-16 bg-primary' />
							) : (
								`${minutes}:${seconds}`
							)}
						</div>
					)
				}}
			</CountdownCircleTimer>
			<audio
				ref={audioRef}
				src='/puk.mp3'
			/>
		</div>
	)
}
