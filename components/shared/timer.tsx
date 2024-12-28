import type { FC } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Timer: FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex flex-col items-center', className)}>
			<h1 className='text-4xl text-white'>23:59</h1>
			<span className='uppercase'>focus</span>
		</div>
	)
}
