import { City } from '@/mock/cities/types'
import { getCity } from '@/services'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function CityDetails() {
  const router = useRouter()
  const { cityName } = useLocalSearchParams()
  const [cityData, setCityData] = useState<City>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!cityName) return

    const fetchCity = async () => {
      const city = await getCity(cityName as string)
      if (!city) setError('Cidade não encontrada ou erro na requisição.')
      if (city) setCityData(city)
      setLoading(false)
    }

    fetchCity()
  }, [])

  if (!cityName) return null
  if (loading) return <Text>Loading...</Text>
  if (!cityData || error) return <Text>{error}</Text>

  return (
    <View>
      <Text>{cityData.city}</Text>
    </View>
  )
}
