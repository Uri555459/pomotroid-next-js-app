import type { NextPage } from 'next'

import { TimerChangeItem } from '@/components/shared'

const Menu: NextPage = () => {
	return (
		<div>
			<h1 className='text-2xl'>Timer</h1>
			<TimerChangeItem className='pt-5' />
		</div>
	)
}
export default Menu
