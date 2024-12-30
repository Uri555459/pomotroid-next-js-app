import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TimerStore = {
	isPlay: boolean
	isReset: boolean

	timeFocusValue: number
	timeShortBreakValue: number
	timeLongBreakValue: number
	timeRoundsValue: number
	timeRoundsCurrentValue: number
	keyName: string

	changeIsReset: () => void
	changeIsPlay: () => void
	changeTimerSliderHandler: (keyName: string, value: number) => void
}

export const useTimer = create<TimerStore>()(
	devtools(set => ({
		isPlay: false,
		isReset: false,

		timeFocusValue: 25,
		timeShortBreakValue: 1,
		timeLongBreakValue: 10,
		timeRoundsValue: 4,
		timeRoundsCurrentValue: 1,
		keyName: 'defaultValue',

		changeIsReset: () => set(state => ({ isReset: !state.isReset })),
		changeIsPlay: () => set(state => ({ isPlay: !state.isPlay })),
		changeTimerSliderHandler: (keyName: string, value: number) =>
			set(() => ({ [keyName]: value })),
	})),
)
