import { City } from '@/mock/cities/types'
import { ordersCities } from '@/utils'

export const getCities = async () => {
  try {
    const response = await fetch('https://climapp-api.vercel.app/api')
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    const result = (await response.json()) as City[]
    const orderedCities = ordersCities(result)
    return orderedCities
  } catch (error) {
    console.error('file: services/getCities/index.ts ~ getCities ~ error', error)
    return null
  }
}
