import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Header } from '@/components/shared'

import './globals.css'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
	title: 'Pomotroid App',
	description: 'My Pomotroid App',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='en'>
			<body className={`${roboto.variable} antialiased`}>
				<main className='mx-auto min-h-[480px] w-full max-w-96 bg-[#23262e] px-5 py-6'>
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}

export default RootLayout
