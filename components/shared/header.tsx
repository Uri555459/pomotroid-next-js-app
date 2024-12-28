import { Menu, Minus, X } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { cn } from '@/lib/utils'

import { ROUTE_CONSTANTS } from '@/constants/route.constants'

import { Button } from '../ui'

interface Props {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={cn(className)}>
			<h1 className='text-2x hover:text-red mb-3 text-center font-normal text-[#05caae]'>
				Pomotroid
			</h1>
			<div className='flex items-center justify-between'>
				<Link href={ROUTE_CONSTANTS.menu}>
					<Menu
						size={20}
						color='gray'
					/>
				</Link>
				<div className='flex items-center gap-2'>
					<Button>
						<Minus
							size={20}
							color='gray'
						/>
					</Button>
					<Button>
						<X
							size={20}
							color='gray'
						/>
					</Button>
				</div>
			</div>
		</header>
	)
}
