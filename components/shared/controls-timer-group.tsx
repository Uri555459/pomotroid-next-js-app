'use client'

import { Pause, Play, SkipForward, Volume2 } from 'lucide-react'
import type { FC } from 'react'

import { useTimer } from '@/store'

import { cn } from '@/lib/utils'

import { Button } from '../ui'

interface Props {
	className?: string
}

export const ControlsTimerGroup: FC<Props> = ({ className }) => {
	const { isPlay, changeIsPlay, changeIsReset } = useTimer()
	return (
		<div className={cn(className)}>
			<div className='flex items-center justify-center'>
				<Button
					className='border-gray flex h-14 w-14 items-center rounded-full border-2 p-0'
					onClick={changeIsPlay}
				>
					{!isPlay ? <Play size={20} /> : <Pause size={20} />}
				</Button>
			</div>
			<div className='flex items-center justify-between pt-14'>
				<div>
					<div>1/4</div>
					<Button onClick={changeIsReset}>Reset</Button>
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
