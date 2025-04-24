import { City } from '@/mock/cities/types'
import { theme } from '@/theme'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { WeatherIcon } from '../icons'

interface CityCardProps {
  item: City
}

export const CityCard = ({ item }: CityCardProps) => {
  const router = useRouter()

  const city = item.city
  const temp = item.temp
  const condition = item.condition_slug
  const formattedCity = city.replace(', ', ' - ')

  const handlePress = () => router.push(`/${city}`)

  return (
    <Pressable style={style.container} onPress={handlePress}>
      <WeatherIcon condition={condition} />
      <Text style={style.name}>{formattedCity}</Text>
      <Text style={style.temp}>{temp}°</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.whiteTrans15,
  },

  name: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },

  temp: {
    fontFamily: theme.fontFamily.montserrat700,
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
  },
})
