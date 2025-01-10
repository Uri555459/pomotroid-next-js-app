import { Clock, Info, Palette, Settings } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { cn } from '@/lib/utils'

import { ROUTE_PAGE_CONSTANTS } from '@/constants/route.constants'

interface Props {
	className?: string
}

export const Navigate: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex items-center justify-between bg-[#23262e]',
				className,
			)}
		>
			<Link
				className='flex w-full items-center justify-center p-3'
				href={ROUTE_PAGE_CONSTANTS.timerConfig}
			>
				<Clock size={20} />
			</Link>
			<Link
				className='flex w-full items-center justify-center p-3'
				href={ROUTE_PAGE_CONSTANTS.options}
			>
				<Settings size={20} />
			</Link>
			<Link
				className='flex w-full items-center justify-center p-3'
				href={ROUTE_PAGE_CONSTANTS.themes}
			>
				<Palette size={20} />
			</Link>
			<Link
				className='flex w-full items-center justify-center p-3'
				href={ROUTE_PAGE_CONSTANTS.about}
			>
				<Info size={20} />
			</Link>
		</div>
	)
}
