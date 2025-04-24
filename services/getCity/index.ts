import { City } from '@/@types'

export const getCity = async (city: string) => {
  try {
    const response = await fetch('https://climapp-api.vercel.app/api')
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    const result = (await response.json()) as City[]

    const cityData = result.find((item) => item.city.toLowerCase() === city.toLowerCase())
    if (!cityData) throw new Error('City not found...')

    return cityData
  } catch (error) {
    console.error('file: services/getCity/index.ts ~ getCity ~ error', error)
    return null
  }
}
