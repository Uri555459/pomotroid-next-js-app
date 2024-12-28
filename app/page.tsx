import type { NextPage } from 'next'

import { ControlsTimerGroup, Timer } from '@/components/shared'

const Home: NextPage = () => {
	return (
		<div className='pt-14'>
			<Timer />
			<ControlsTimerGroup className='pt-5' />
		</div>
	)
}

export default Home
