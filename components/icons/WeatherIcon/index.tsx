import { WEATHER_DICTIONARY } from '@/dictionary'

interface WeatherIconProps {
  width?: number
  height?: number
  condition?: string
}

export const WeatherIcon = ({ width = 32, height = 32, condition = 'clear_day' }: WeatherIconProps) => {
  const IconComponent = WEATHER_DICTIONARY[condition as keyof typeof WEATHER_DICTIONARY]

  return <IconComponent width={width} height={height} />
}
