import type { NextPage } from 'next'

import { ControlsTimerGroup, Timer } from '@/components/shared'

const Home: NextPage = () => {
	return (
		<div className='pt-14'>
			<Timer time={5} />
			<ControlsTimerGroup className='pt-5' />
		</div>
	)
}

export default Home
