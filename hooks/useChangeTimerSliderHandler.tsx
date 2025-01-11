import { Timer } from '@prisma/client'
import { useEffect, useState } from 'react'

import { ROUTE_API_CONSTANTS } from '@/constants/route.constants'

import { KeyNameType } from '@/@types'

import { axiosInstance } from '@/axios'

export const useChangeTimerSliderHandler = (
	keyName: KeyNameType,
	value: number | boolean,
) => {
	const [str, setStr] = useState('')
	const [preData, setPreData] = useState<Timer>()

	const changeTimerSliderHandler = async (
		keyName: KeyNameType,
		value: number | boolean,
	) => {
		const { data } = await axiosInstance.put<Timer>(ROUTE_API_CONSTANTS.timer, {
			[keyName]: value,
		})

		setStr(data[keyName].toString())
		setPreData(data)
		return data
	}

	useEffect(() => {
		changeTimerSliderHandler(keyName, value)
	}, [keyName, value])

	return [str, setStr, preData]
}
