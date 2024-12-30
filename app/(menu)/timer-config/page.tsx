import type { NextPage } from 'next'

import { TimerChangeItemList } from '@/components/shared'

const TimerConfig: NextPage = () => {
	return (
		<div className='-mx-5 -mb-5 bg-[#2d313c] px-5 py-3'>
			<h1 className='text-center text-xl'>Timer</h1>
			<TimerChangeItemList />
		</div>
	)
}
export default TimerConfig
