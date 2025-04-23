import { ArrowLeftIcon, HumidityIcon, TempIcon, WeatherIcon } from '@/components'
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
  const [day, month] = cityData.date.split('/')
  const description = cityData.description
  const humidity = cityData.humidity
  const min = cityData.forecast[0].min
  const max = cityData.forecast[0].max

  console.log(cityData)

  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Pressable style={style.backButton} onPress={() => router.back()}>
          <ArrowLeftIcon />
        </Pressable>

        <Text style={style.cityName}>{formattedCity}</Text>
      </View>

      <View style={style.cardContainer}>
        <View style={style.headerCard}>
          <Text style={style.textHeader}>Hoje</Text>
          <Text style={style.textHeader}>
            ({day}/{month})
          </Text>
        </View>

        <View style={style.mainCard}>
          <WeatherIcon width={72} height={64} />
          <Text style={style.tempTextMain}>{temp}°</Text>
          <Text style={style.descriptionTextMain}>{description}</Text>
        </View>

        <View>
          <View>
            <HumidityIcon />
            <Text>Umidade:</Text>
            <Text>{humidity}%</Text>
          </View>

          <View>
            <TempIcon />
            <Text>Min/Max:</Text>
            <Text>
              {min}/{max}°
            </Text>
          </View>
        </View>
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

  cardContainer: {
    width: '100%',
    backgroundColor: theme.colors.violet500,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
    alignItems: 'center',
    gap: theme.spacing.md,
  },

  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  textHeader: {
    fontFamily: theme.fontFamily.montserrat600,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },

  mainCard: {
    alignItems: 'center',
  },

  tempTextMain: {
    fontFamily: theme.fontFamily.montserrat700,
    fontSize: theme.fontSize['2xl'],
    color: theme.colors.white,
    lineHeight: 52,
    marginTop: -12,
  },

  descriptionTextMain: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.sm,
    color: theme.colors.white,
  },
})
