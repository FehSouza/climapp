import { City } from '@/@types'
import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'
import { HumidityIcon, TempIcon, WeatherIcon } from '../icons'

interface CityCardDetailsProps {
  city: City
}

export const CityCardDetails = ({ city }: CityCardDetailsProps) => {
  const [day, month] = city.date.split('/')
  const date = `${day}/${month}`
  const temp = `${city.temp}°`
  const description = city.description
  const humidity = `${city.humidity}%`
  const min = city.forecast[0].min
  const max = city.forecast[0].max
  const minMax = `${min}/${max}°`
  const condition = city.condition_slug

  return (
    <View style={style.container}>
      <View style={style.dateContent}>
        <Text style={style.date}>Hoje</Text>
        <Text style={style.date}>{date}</Text>
      </View>

      <View style={style.tempContent}>
        <WeatherIcon width={64} height={64} condition={condition} />
        <Text style={style.temp}>{temp}</Text>
        <Text style={style.description}>{description}</Text>
      </View>

      <View style={style.infosContent}>
        <View style={style.infoWrapper}>
          <HumidityIcon />
          <Text style={style.infoTitle}>Umidade:</Text>
          <Text style={style.info}>{humidity}</Text>
        </View>

        <View style={style.infoWrapper}>
          <TempIcon />
          <Text style={style.infoTitle}>Min/Max:</Text>
          <Text style={style.info}>{minMax}</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: theme.spacing.md,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.violet500,
    borderRadius: theme.borderRadius.md,
  },

  dateContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  date: {
    fontFamily: theme.fontFamily.montserrat600,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },

  tempContent: {
    alignItems: 'center',
  },

  temp: {
    fontFamily: theme.fontFamily.montserrat700,
    fontSize: theme.fontSize['2xl'],
    color: theme.colors.white,
    lineHeight: 52,
  },

  description: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.sm,
    color: theme.colors.white,
  },

  infosContent: {
    width: '100%',
    gap: theme.spacing.xs,
  },

  infoWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoTitle: {
    marginLeft: theme.spacing.xs,
    fontFamily: theme.fontFamily.montserrat600,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },

  info: {
    marginLeft: 'auto',
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },
})
