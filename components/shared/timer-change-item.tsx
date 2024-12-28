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
}

export const TimerChangeItem: FC<Props> = ({
	className,
	defaultValue = 1,
	min = 0,
	max = 1000,
	step = 1,
}) => {
	const [value, setValue] = useState<number>(defaultValue)
	const onChange = (value: number[]) => {
		setValue(value[0])
	}

	return (
		<div className={cn(className)}>
			<div>
				<h2 className='capitalize text-[#775f35]'>fucus</h2>
				<div>{value}</div>
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
