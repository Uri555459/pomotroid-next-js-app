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
	const { isPlay, setIsPlay, isReset, setIsReset } = useTimer()

	const handleReset = () => {
		setIsPlay()
		setIsReset()
	}

	console.log(isReset)

	return (
		<div className={cn('flex flex-col items-center', className)}>
			<CountdownCircleTimer
				key={isReset}
				isGrowing={false}
				isPlaying={isPlay}
				size={220}
				strokeWidth={10}
				trailColor='#736e76'
				trailStrokeWidth={2}
				duration={time}
				colors={['#ed5c42', '#ed5c42', '#ed5c42', '#ed5c42']}
				colorsTime={[7, 5, 2, 0]}
				onComplete={() => {
					setIsPlay()
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
			<button onClick={handleReset}>RESET</button>
		</div>
	)
}
