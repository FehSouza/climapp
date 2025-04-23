import { ArrowLeftIcon } from '@/components'
import { City } from '@/mock/cities/types'
import { getCity } from '@/services'
import { theme } from '@/theme'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

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

  const city = cityData.city
  const temp = cityData.temp
  const formattedCity = city.replace(', ', ' - ')

  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Pressable style={style.backButton} onPress={() => router.back()}>
          <ArrowLeftIcon />
        </Pressable>

        <Text style={style.cityName}>{formattedCity}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    gap: theme.spacing.xl,
    paddingVertical: theme.spacing['2xl'],
    paddingHorizontal: theme.spacing.sm,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  backButton: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: '-50%' }],
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cityName: {
    fontFamily: theme.fontFamily.montserrat600,
    fontSize: theme.fontSize.lg,
    color: theme.colors.white,
  },
})
