import { City } from '@/mock/cities/types'
import { theme } from '@/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WeatherIcon } from '../icons'

interface CityCardProps {
  item: City
}

export const CityCard = ({ item }: CityCardProps) => {
  const formattedName = item.city.replace(',', ' -')
  const temp = item.temp

  return (
    <View style={style.container}>
      <WeatherIcon />
      <Text style={style.name}>{formattedName}</Text>
      <Text style={style.temp}>{temp}°</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
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
