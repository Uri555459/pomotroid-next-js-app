import type { NextPage } from 'next'

import { TimerChangeItem } from '@/components/shared'
import { Button } from '@/components/ui'

const TimerConfig: NextPage = () => {
	return (
		<div className='-mx-5 -mb-5 bg-[#2d313c] px-5 py-3'>
			<h1 className='text-center text-xl'>Timer</h1>
			<TimerChangeItem
				title='focus'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={25}
			/>
			<TimerChangeItem
				title='short break'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={5}
			/>
			<TimerChangeItem
				title='long break'
				className='pt-5'
				min={1}
				max={90}
				defaultValue={10}
			/>
			<TimerChangeItem
				title='rounds'
				className='pt-5'
				min={1}
				max={12}
				defaultValue={3}
			/>
			<div className='my-5 text-center'>
				<Button>Reset Default</Button>
			</div>
		</div>
	)
}
export default TimerConfig
