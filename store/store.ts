import { create } from 'zustand'

type TimerStore = {
	isPlay: boolean
	isReset: number
	setIsReset: () => void
	setIsPlay: () => void
}

export const useTimer = create<TimerStore>()(set => ({
	isPlay: false,
	isReset: 0,
	setIsReset: () => set(state => ({ isReset: state.isReset + 1 })),
	setIsPlay: () => set(state => ({ isPlay: !state.isPlay })),
}))
