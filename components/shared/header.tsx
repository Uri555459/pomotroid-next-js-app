import { Menu, Minus, X } from 'lucide-react'
import type { FC } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={cn('flex items-center justify-between', className)}>
			<Menu
				size={20}
				color='gray'
			/>
			<h1 className='text-2x hover:text-red font-normal text-[#05caae]'>
				Pomotroid
			</h1>
			<div className='flex items-center gap-2'>
				<Minus
					size={20}
					color='gray'
				/>

				<X
					size={20}
					color='gray'
				/>
			</div>
		</header>
	)
}
