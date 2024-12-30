'use client'

import { ChevronLeft, Menu, Minus, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC } from 'react'

import { Button } from '@/components/ui'

import { cn } from '@/lib/utils'

import { ROUTE_CONSTANTS } from '@/constants/route.constants'

interface Props {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	const pathName = usePathname()
	return (
		<header className={cn('bg-[#23262e] pb-3', className)}>
			<h1 className='text-2x hover:text-red mb-3 text-center font-normal text-[#05caae]'>
				Pomotroid
			</h1>
			<div className='flex items-center justify-between'>
				{pathName !== ROUTE_CONSTANTS.home ? (
					<Link href={ROUTE_CONSTANTS.home}>
						<ChevronLeft
							size={20}
							color='gray'
						/>
					</Link>
				) : (
					<Link href={ROUTE_CONSTANTS.timerConfig}>
						<Menu
							size={20}
							color='gray'
						/>
					</Link>
				)}

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
