'use client'

import { useRef, useState } from 'react'
import type { FC } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useTimer } from '@/store/store'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Timer: FC<Props> = ({ className }) => {
	const timer = useTimer(state => state)

	const [updateTime, setUpdateTime] = useState(timer.timeFocusValue)

	const audioRef = useRef<HTMLAudioElement>(null)

	const play = () => {
		if (audioRef.current) {
			audioRef.current.play()
		} else {
			// Throw error
		}
	}

	return (
		<div className={cn('flex flex-col items-center', className)}>
			<CountdownCircleTimer
				key={Number(timer.isReset)}
				isGrowing={false}
				isPlaying={timer.isPlay}
				size={220}
				strokeWidth={10}
				trailColor='#736e76'
				trailStrokeWidth={2}
				duration={updateTime * 60}
				colors={['#ed5c42', '#ed5c42', '#ed5c42', '#ed5c42']}
				colorsTime={[7, 5, 2, 0]}
				onComplete={() => {
					if (
						timer.timeRoundsCurrentValue !== timer.timeRoundsValue &&
						timer.timeRoundsCurrentValue % 2 !== 0
					) {
						timer.changeTimerSliderHandler(
							'timeRoundsCurrentValue',
							timer.timeRoundsCurrentValue + 1,
						)
						play()

						setUpdateTime(timer.timeShortBreakValue)
						timer.changeIsReset()
						timer.changeIsPlay()
					} else if (timer.timeRoundsCurrentValue !== timer.timeRoundsValue) {
						timer.changeTimerSliderHandler(
							'timeRoundsCurrentValue',
							timer.timeRoundsCurrentValue + 1,
						)
						play()
						setUpdateTime(timer.timeFocusValue)
						timer.changeIsReset()
						timer.changeIsPlay()
					} else if (timer.timeRoundsCurrentValue === timer.timeRoundsValue) {
						play()
						setUpdateTime(timer.timeLongBreakValue)
						timer.changeIsPlay()
					}
					timer.changeIsPlay()
				}}
				onUpdate={() => {}}
				rotation='clockwise'
			>
				{({ remainingTime }) => {
					const minutes = Math.floor(remainingTime / 60)
					const seconds = remainingTime % 60
					return `${minutes}:${seconds}`
				}}
			</CountdownCircleTimer>
			<audio
				ref={audioRef}
				src='/puk.mp3'
			/>
		</div>
	)
}
