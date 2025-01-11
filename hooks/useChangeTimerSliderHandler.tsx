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

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axiosInstance.put<Timer>(
				ROUTE_API_CONSTANTS.timer,
				{
					[keyName]: value,
				},
			)

			setStr(data[keyName].toString())
			setPreData(data)
		}

		fetchData()
	}, [value, keyName])

	return [str, setStr, preData]
}
