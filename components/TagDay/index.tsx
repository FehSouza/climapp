import { WEEK_DAY_DICTIONARY } from '@/dictionary'
import { Forecast } from '@/mock/cities/types'
import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'
import { WeatherIcon } from '../icons'

interface TagDayProps {
  item: Forecast
  index: number
}

export const TagDay = ({ item, index }: TagDayProps) => {
  const weekday = item.weekday as keyof typeof WEEK_DAY_DICTIONARY
  const weekdayFormatted = index === 0 ? 'Amanhã' : WEEK_DAY_DICTIONARY[weekday]
  const date = item.date
  const min = item.min
  const max = item.max
  const minMax = `${min}/${max}°`
  const condition = item.condition

  return (
    <View style={style.container}>
      <View style={style.dateWrapper}>
        <Text style={style.text}>{weekdayFormatted}</Text>
        <Text style={style.text}>{date}</Text>
      </View>

      <WeatherIcon condition={condition} />
      <Text style={style.temp}>{minMax}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    minWidth: '31%',
    flex: 1,
    alignItems: 'center',
    gap: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.whiteTrans15,
    borderRadius: theme.borderRadius.sm,
  },

  dateWrapper: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  text: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.sm,
    color: theme.colors.white,
  },

  temp: {
    fontFamily: theme.fontFamily.montserrat600,
    fontSize: theme.fontSize.lg,
    color: theme.colors.white,
  },
})
