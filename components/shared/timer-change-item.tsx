'use client'

import { useState } from 'react'
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
}

export const TimerChangeItem: FC<Props> = ({
	className,
	defaultValue = 1,
	min = 0,
	max = 1000,
	step = 1,
	title,
}) => {
	const [value, setValue] = useState<number>(defaultValue)
	const onChange = (value: number[]) => {
		setValue(value[0])
	}

	return (
		<div className={cn(className)}>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='text-center text-sm capitalize text-[#cc9630]'>
					{title}
				</h2>
				<div className='mb-3'>{`${value} : 00`}</div>
				<Slider
					defaultValue={[defaultValue]}
					min={min}
					max={max}
					step={step}
					onValueChange={onChange}
				/>
			</div>
		</div>
	)
}
