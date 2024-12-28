import { create } from 'zustand'

type TimerStore = {
	isPlay: boolean
	isReset: number
	changeIsReset: () => void
	changeIsPlay: () => void
}

export const useTimer = create<TimerStore>()(set => ({
	isPlay: false,
	isReset: 0,
	changeIsReset: () => set(state => ({ isReset: state.isReset + 1 })),
	changeIsPlay: () => set(state => ({ isPlay: !state.isPlay })),
}))
