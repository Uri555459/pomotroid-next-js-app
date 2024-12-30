'use client'

import type { FC } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useTimer } from '@/store/store'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
	time: number
}

export const Timer: FC<Props> = ({ className, time = 5 }) => {
	const timer = useTimer()

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
				duration={time}
				colors={['#ed5c42', '#ed5c42', '#ed5c42', '#ed5c42']}
				colorsTime={[7, 5, 2, 0]}
				onComplete={() => {
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
		</div>
	)
}
