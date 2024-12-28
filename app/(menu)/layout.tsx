import type { Metadata } from 'next'

import { Navigate } from '@/components/shared'

export const metadata: Metadata = {
	title: 'Navigate App',
	description: 'Navigation',
}

const MenuLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<>
			{children}
			<Navigate className='-mx-5 -mb-5' />
		</>
	)
}

export default MenuLayout
